"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Download } from "lucide-react";

const activityData = [
  { name: "Mon", tasks: 20, messages: 15, files: 5 },
  { name: "Tue", tasks: 25, messages: 20, files: 8 },
  { name: "Wed", tasks: 30, messages: 25, files: 12 },
  { name: "Thu", tasks: 22, messages: 18, files: 7 },
  { name: "Fri", tasks: 28, messages: 22, files: 10 },
];

export function AnalyticsView() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>
      <div className="grid gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Task Completion</h3>
            <div className="text-3xl font-bold mb-4">87%</div>
            <div className="h-2 bg-muted rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: "87%" }} />
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Team Activity</h3>
            <div className="text-3xl font-bold mb-4">92%</div>
            <div className="h-2 bg-muted rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: "92%" }} />
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Project Progress</h3>
            <div className="text-3xl font-bold mb-4">75%</div>
            <div className="h-2 bg-muted rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: "75%" }} />
            </div>
          </Card>
        </div>
        <Card className="p-6">
          <h3 className="font-semibold mb-6">Activity Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={{ stroke: 'hsl(var(--border))' }}
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={{ stroke: 'hsl(var(--border))' }}
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    border: '1px solid hsl(var(--border))'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="messages"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="files"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </main>
  );
}