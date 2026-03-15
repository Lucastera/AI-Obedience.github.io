'use client'

import { Badge } from '@/components/ui/badge'
import { AlertTriangle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            ICML 2026 · Level-4 Obedience Benchmark
          </Badge>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            VIOLIN Leaderboard
          </h1>
          
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Evaluating AI's ability to generate <span className="font-semibold text-foreground">pure colors</span> with 
            pixel-perfect precision. Why is generating RGB(255, 0, 0) harder than a Cyberpunk scene?
          </p>

          <div className="flex items-center gap-2 rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-3">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <p className="text-sm text-amber-400">
              <strong>Paradox of Simplicity:</strong> SOTA models struggle with deterministic pixel-level control
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
