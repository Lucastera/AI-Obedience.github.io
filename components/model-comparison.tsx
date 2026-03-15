'use client'

import { useState } from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { var1Results } from '@/lib/data'

const chartConfig = {
  model1: {
    label: 'Model 1',
    color: 'var(--chart-1)',
  },
  model2: {
    label: 'Model 2',
    color: 'var(--chart-2)',
  },
}

const comparisonMetrics = [
  { key: 'rgbEd', name: 'RGB Euclidean' },
  { key: 'rgbRm', name: 'RGB RedMean' },
  { key: 'lab00', name: 'CIEDE2000' },
  { key: 'labHue', name: 'MAE Hue' },
  { key: 'labHyab', name: 'Delta HyAB' },
  { key: 'labCh', name: 'Delta Chroma' },
]

export function ModelComparison() {
  const [model1, setModel1] = useState(var1Results[0].model)
  const [model2, setModel2] = useState(var1Results[1].model)

  const model1Data = var1Results.find(m => m.model === model1)
  const model2Data = var1Results.find(m => m.model === model2)

  const comparisonData = comparisonMetrics.map(metric => ({
    metric: metric.name,
    model1: model1Data?.colorPrecision[metric.key as keyof typeof model1Data.colorPrecision] || 0,
    model2: model2Data?.colorPrecision[metric.key as keyof typeof model2Data.colorPrecision] || 0,
  }))

  return (
    <section className="border-b border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-foreground">Compare Models</h2>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-chart-1" />
              <Select value={model1} onValueChange={setModel1}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {var1Results.map(m => (
                    <SelectItem key={m.model} value={m.model}>
                      {m.model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <span className="text-muted-foreground">vs</span>
            
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-chart-2" />
              <Select value={model2} onValueChange={setModel2}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {var1Results.map(m => (
                    <SelectItem key={m.model} value={m.model}>
                      {m.model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Color Precision Metrics</h3>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={comparisonData} layout="vertical">
                  <XAxis 
                    type="number"
                    domain={[0, 0.6]}
                    tickFormatter={(v) => v.toFixed(1)}
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="metric"
                    width={100}
                    tick={{ fill: 'var(--foreground)', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="model1" name={model1} fill="var(--chart-1)" radius={[0, 4, 4, 0]} barSize={12} />
                  <Bar dataKey="model2" name={model2} fill="var(--chart-2)" radius={[0, 4, 4, 0]} barSize={12} />
                </BarChart>
            </ChartContainer>
          </div>

          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Model Details</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[model1Data, model2Data].map((model, idx) => (
                <div key={model?.model} className="rounded-lg border border-border bg-card/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`inline-block h-3 w-3 rounded-full ${idx === 0 ? 'bg-chart-1' : 'bg-chart-2'}`} />
                    <span className="font-medium text-foreground">{model?.model}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Organization</span>
                      <span className="text-foreground">{model?.organization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span className={model?.type === 'Open' ? 'text-emerald-400' : 'text-blue-400'}>
                        {model?.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precision Mean</span>
                      <span className="font-mono text-primary">{model?.colorPrecision.mean.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purity Mean</span>
                      <span className="font-mono text-primary">{model?.colorPurity.mean.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Updated</span>
                      <span className="text-foreground">{model?.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
