'use client'

import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { topModelsPerTask } from '@/lib/data'

const chartConfig = {
  score: {
    label: 'Score',
    color: 'var(--chart-1)',
  },
}

const colors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)']

export function TopModelsChart() {
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-xl font-semibold text-foreground">Top Models per Task</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {topModelsPerTask.map((task) => (
            <div key={task.task} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">{task.task}</h3>
              <ChartContainer config={chartConfig} className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={task.models}
                    layout="vertical"
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  >
                    <XAxis 
                      type="number" 
                      domain={[0, 0.4]} 
                      tickFormatter={(v) => v.toFixed(2)}
                      tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={100}
                      tick={{ fill: 'var(--foreground)', fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                      cursor={{ fill: 'var(--muted)', opacity: 0.2 }}
                    />
                    <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                      {task.models.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Lower is better</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-chart-1" />
                  1st
                  <span className="ml-2 inline-block h-2 w-2 rounded-full bg-chart-2" />
                  2nd
                  <span className="ml-2 inline-block h-2 w-2 rounded-full bg-chart-3" />
                  3rd
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
