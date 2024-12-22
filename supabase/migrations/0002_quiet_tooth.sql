/*
  # Workspaces Schema

  1. New Tables
    - `workspaces`
      - `id` (uuid, primary key)
      - `name` (text)
      - `owner_id` (uuid, references profiles)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `workspace_members`
      - `workspace_id` (uuid, references workspaces)
      - `user_id` (uuid, references profiles)
      - `role` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for workspace access
*/

CREATE TABLE IF NOT EXISTS workspaces (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS workspace_members (
  workspace_id uuid REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  role text DEFAULT 'member',
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (workspace_id, user_id)
);

ALTER TABLE workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE workspace_members ENABLE ROW LEVEL SECURITY;

-- Workspace policies
CREATE POLICY "Users can view workspaces they are members of"
  ON workspaces
  FOR SELECT
  USING (
    id IN (
      SELECT workspace_id 
      FROM workspace_members 
      WHERE user_id = auth.uid()
    )
    OR owner_id = auth.uid()
  );

-- Workspace members policies
CREATE POLICY "Users can view members of their workspaces"
  ON workspace_members
  FOR SELECT
  USING (
    workspace_id IN (
      SELECT id 
      FROM workspaces 
      WHERE owner_id = auth.uid()
    )
    OR user_id = auth.uid()
  );