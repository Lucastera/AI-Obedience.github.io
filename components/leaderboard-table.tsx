'use client'

import { useState, Fragment } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ChevronDown, ChevronUp, Trophy, Medal, Award } from 'lucide-react'
import { var1Results, var2Results, var3Results, variations, type ModelResult } from '@/lib/data'

function getRankIcon(rank: number) {
  if (rank === 1) return <Trophy className="h-4 w-4 text-yellow-500" />
  if (rank === 2) return <Medal className="h-4 w-4 text-gray-400" />
  if (rank === 3) return <Award className="h-4 w-4 text-amber-600" />
  return <span className="text-sm text-muted-foreground">{rank}</span>
}

function getScoreColor(score: number, metric: 'precision' | 'purity'): string {
  if (metric === 'precision') {
    if (score < 0.1) return 'text-emerald-400'
    if (score < 0.2) return 'text-green-400'
    if (score < 0.3) return 'text-yellow-400'
    return 'text-orange-400'
  } else {
    if (score < 0.05) return 'text-emerald-400'
    if (score < 0.1) return 'text-green-400'
    if (score < 0.15) return 'text-yellow-400'
    return 'text-orange-400'
  }
}

function ProgressBar({ value, max, color }: { value: number; max: number; color: string }) {
  const percentage = Math.min((value / max) * 100, 100)
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className={`h-full rounded-full transition-all ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

function getBarColor(score: number, metric: 'precision' | 'purity'): string {
  if (metric === 'precision') {
    if (score < 0.1) return 'bg-emerald-500'
    if (score < 0.2) return 'bg-green-500'
    if (score < 0.3) return 'bg-yellow-500'
    return 'bg-orange-500'
  } else {
    if (score < 0.05) return 'bg-emerald-500'
    if (score < 0.1) return 'bg-green-500'
    if (score < 0.15) return 'bg-yellow-500'
    return 'bg-orange-500'
  }
}

export function LeaderboardTable() {
  const [activeVariation, setActiveVariation] = useState('var1')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const [sortKey, setSortKey] = useState<'precision' | 'purity'>('precision')
  const [sortAsc, setSortAsc] = useState(true)

  const getDataForVariation = (): ModelResult[] => {
    switch (activeVariation) {
      case 'var1':
        return var1Results
      case 'var2':
        return var2Results
      case 'var3':
        return var3Results
      default:
        return var1Results
    }
  }

  const sortedData = [...getDataForVariation()].sort((a, b) => {
    const valueA = sortKey === 'precision' ? a.colorPrecision.mean : a.colorPurity.mean
    const valueB = sortKey === 'precision' ? b.colorPrecision.mean : b.colorPurity.mean
    return sortAsc ? valueA - valueB : valueB - valueA
  })

  const handleSort = (key: 'precision' | 'purity') => {
    if (sortKey === key) {
      setSortAsc(!sortAsc)
    } else {
      setSortKey(key)
      setSortAsc(true)
    }
  }

  return (
    <section id="leaderboard" className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-foreground">Model Comparison</h2>
          
          <Tabs value={activeVariation} onValueChange={setActiveVariation}>
            <TabsList className="grid w-full grid-cols-3 sm:w-auto">
              {variations.map((v) => (
                <TabsTrigger key={v.id} value={v.id} className="text-xs">
                  {v.shortName}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mb-4 rounded-lg border border-border bg-card/50 p-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/50 text-primary">
              {variations.find(v => v.id === activeVariation)?.name}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {variations.find(v => v.id === activeVariation)?.description}
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 text-center">Rank</TableHead>
                <TableHead>Model</TableHead>
                <TableHead className="w-20 text-center">Type</TableHead>
                <TableHead className="w-64">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-xs font-medium hover:bg-transparent"
                    onClick={() => handleSort('precision')}
                  >
                    Color Precision
                    {sortKey === 'precision' && (sortAsc ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />)}
                  </Button>
                  <span className="block text-xs font-normal text-muted-foreground">Lower is better</span>
                </TableHead>
                <TableHead className="w-64">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-xs font-medium hover:bg-transparent"
                    onClick={() => handleSort('purity')}
                  >
                    Color Purity
                    {sortKey === 'purity' && (sortAsc ? <ChevronUp className="ml-1 h-3 w-3" /> : <ChevronDown className="ml-1 h-3 w-3" />)}
                  </Button>
                  <span className="block text-xs font-normal text-muted-foreground">Lower is better</span>
                </TableHead>
                <TableHead className="w-24 text-center">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((model, index) => (
                <Fragment key={model.model}>
                  <TableRow
                    className="cursor-pointer transition-colors hover:bg-muted/50"
                    onClick={() => setExpandedRow(expandedRow === model.model ? null : model.model)}
                  >
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        {getRankIcon(index + 1)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{model.model}</span>
                        <span className="text-xs text-muted-foreground">{model.organization}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={model.type === 'Open' ? 'outline' : 'secondary'}
                        className={model.type === 'Open' ? 'border-emerald-500/50 text-emerald-400' : 'border-blue-500/50 text-blue-400'}
                      >
                        {model.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <ProgressBar value={model.colorPrecision.mean} max={0.5} color={getBarColor(model.colorPrecision.mean, 'precision')} />
                        </div>
                        <span className={`w-16 text-right text-sm font-mono ${getScoreColor(model.colorPrecision.mean, 'precision')}`}>
                          {model.colorPrecision.mean.toFixed(3)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <ProgressBar value={model.colorPurity.mean} max={0.2} color={getBarColor(model.colorPurity.mean, 'purity')} />
                        </div>
                        <span className={`w-16 text-right text-sm font-mono ${getScoreColor(model.colorPurity.mean, 'purity')}`}>
                          {model.colorPurity.mean.toFixed(3)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm text-muted-foreground">
                      {model.date}
                    </TableCell>
                  </TableRow>
                  {expandedRow === model.model && (
                    <TableRow className="bg-muted/30 hover:bg-muted/30">
                      <TableCell colSpan={6} className="p-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h4 className="mb-3 text-sm font-medium text-foreground">Color Precision Breakdown</h4>
                            <div className="space-y-2">
                              {[
                                { key: 'RGB Euclidean', value: model.colorPrecision.rgbEd },
                                { key: 'RGB RedMean', value: model.colorPrecision.rgbRm },
                                { key: 'CIELAB CIEDE2000', value: model.colorPrecision.lab00 },
                                { key: 'MAE Hue', value: model.colorPrecision.labHue },
                                { key: 'Delta Chroma', value: model.colorPrecision.labCh },
                                { key: 'Delta HyAB', value: model.colorPrecision.labHyab },
                              ].map((metric) => (
                                <div key={metric.key} className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{metric.key}</span>
                                  <span className={`font-mono ${getScoreColor(metric.value, 'precision')}`}>
                                    {metric.value.toFixed(3)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-3 text-sm font-medium text-foreground">Color Purity Breakdown</h4>
                            <div className="space-y-2">
                              {[
                                { key: 'Standard Dev', value: model.colorPurity.sd },
                                { key: 'Canny Edge', value: model.colorPurity.ced },
                                { key: 'High Freq', value: model.colorPurity.hf },
                              ].map((metric) => (
                                <div key={metric.key} className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{metric.key}</span>
                                  <span className={`font-mono ${getScoreColor(metric.value, 'purity')}`}>
                                    {metric.value.toFixed(3)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
