"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
}

export function PageLayout({ children, header, sidebar, footer }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <div className="flex-1 flex">
        {sidebar}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      {footer}
    </div>
  );
}