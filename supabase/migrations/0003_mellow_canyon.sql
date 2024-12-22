/*
  # Tasks Schema

  1. New Tables
    - `tasks`
      - `id` (uuid, primary key)
      - `workspace_id` (uuid, references workspaces)
      - `title` (text)
      - `description` (text)
      - `status` (text)
      - `priority` (text)
      - `assignee_id` (uuid, references profiles)
      - `due_date` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for task access
*/

CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id uuid REFERENCES workspaces(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  status text DEFAULT 'todo',
  priority text DEFAULT 'medium',
  assignee_id uuid REFERENCES profiles(id),
  due_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view tasks in their workspaces"
  ON tasks
  FOR SELECT
  USING (
    workspace_id IN (
      SELECT workspace_id 
      FROM workspace_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create tasks in their workspaces"
  ON tasks
  FOR INSERT
  WITH CHECK (
    workspace_id IN (
      SELECT workspace_id 
      FROM workspace_members 
      WHERE user_id = auth.uid()
    )
  );