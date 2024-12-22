"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Column<T> {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({ data, columns, onRowClick }: DataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.key as string}>{column.title}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow 
            key={index}
            onClick={() => onRowClick?.(item)}
            className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
          >
            {columns.map((column) => (
              <TableCell key={column.key as string}>
                {column.render 
                  ? column.render(item[column.key], item)
                  : item[column.key] as React.ReactNode
                }
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}