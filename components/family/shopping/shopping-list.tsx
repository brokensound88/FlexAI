"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, ShoppingCart } from "lucide-react";

interface ShoppingItem {
  id: string;
  name: string;
  completed: boolean;
  assignee?: string;
  category?: string;
}

interface ShoppingListProps {
  items: ShoppingItem[];
  onAddItem: (item: Omit<ShoppingItem, "id">) => void;
  onToggleItem: (id: string) => void;
}

export function ShoppingList({ items, onAddItem, onToggleItem }: ShoppingListProps) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      onAddItem({
        name: newItem.trim(),
        completed: false
      });
      setNewItem("");
    }
  };

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Family Shopping List</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add an item..."
        />
        <Button type="submit">
          <Plus className="h-4 w-4" />
        </Button>
      </form>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg"
          >
            <Checkbox
              checked={item.completed}
              onCheckedChange={() => onToggleItem(item.id)}
            />
            <span className={item.completed ? "line-through text-muted-foreground" : ""}>
              {item.name}
            </span>
            {item.assignee && (
              <span className="ml-auto text-sm text-muted-foreground">
                {item.assignee}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}