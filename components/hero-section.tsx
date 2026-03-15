'use client'

import { Badge } from '@/components/ui/badge'
import { obedienceLevels } from '@/lib/data'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-card py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="secondary" className="px-3 py-1">
              ICML 2026 Submission
            </Badge>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              VIOLIN <span className="text-primary">Benchmark</span>
            </h1>
            
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              <span className="font-semibold text-foreground">V</span>isual{' '}
              <span className="font-semibold text-foreground">I</span>nstruction{' '}
              <span className="font-semibold text-foreground">O</span>bedience{' '}
              <span className="font-semibold text-foreground">L</span>evel-4{' '}
              Evaluat<span className="font-semibold text-foreground">I</span>o
              <span className="font-semibold text-foreground">N</span>
            </p>
            
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Evaluating AI's Ability to Generate Pure Colors with Pixel-Perfect Precision. 
              The first benchmark focused on pure color generation across six variations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex flex-col rounded-lg border border-border bg-card/50 px-4 py-3">
                <span className="text-2xl font-bold text-primary">8</span>
                <span className="text-xs text-muted-foreground">Models Evaluated</span>
              </div>
              <div className="flex flex-col rounded-lg border border-border bg-card/50 px-4 py-3">
                <span className="text-2xl font-bold text-primary">6</span>
                <span className="text-xs text-muted-foreground">Task Variations</span>
              </div>
              <div className="flex flex-col rounded-lg border border-border bg-card/50 px-4 py-3">
                <span className="text-2xl font-bold text-primary">9</span>
                <span className="text-xs text-muted-foreground">Evaluation Metrics</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">Obedience Level Hierarchy</h3>
              <div className="space-y-2">
                {obedienceLevels.map((level, index) => (
                  <div
                    key={level.level}
                    className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                      level.current
                        ? 'border border-primary/50 bg-primary/10'
                        : 'bg-secondary/50'
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold ${
                        level.current
                          ? 'bg-primary text-primary-foreground'
                          : level.type === 'deterministic'
                            ? 'bg-chart-2/20 text-chart-2'
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {level.level}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${level.current ? 'text-primary' : 'text-foreground'}`}>
                          {level.name}
                        </span>
                        {level.current && (
                          <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{level.description}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {level.type === 'deterministic' ? 'Zero-entropy' : 'Flexible'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
