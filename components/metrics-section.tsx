'use client'

import { Badge } from '@/components/ui/badge'
import { Palette, Eye, Ruler, Waves, Grid3X3, Binary } from 'lucide-react'

const precisionMetrics = [
  { 
    name: 'RGB Euclidean', 
    code: 'd_rgb_ed',
    description: 'Computes the Euclidean distance across three RGB channels',
    icon: Ruler
  },
  { 
    name: 'RGB RedMean', 
    code: 'd_rgb_rm',
    description: 'Adaptively adjusts weights based on human eye sensitivity',
    icon: Eye
  },
  { 
    name: 'CIEDE2000', 
    code: 'd_lab_00',
    description: 'Standard perceptual color difference in LAB space',
    icon: Palette
  },
  { 
    name: 'MAE Hue', 
    code: 'd_lab_hue',
    description: 'Measures hue angle differences in cylindrical coordinates',
    icon: Waves
  },
  { 
    name: 'Delta Chroma', 
    code: 'd_lab_ch',
    description: 'Quantifies saturation differences isolating lightness',
    icon: Grid3X3
  },
  { 
    name: 'Delta HyAB', 
    code: 'd_lab_hyab',
    description: 'Combines chroma and lightness for comprehensive assessment',
    icon: Binary
  },
]

const purityMetrics = [
  { 
    name: 'Standard Deviation', 
    code: 'd_sd',
    description: 'Compute the standard deviation across all channels'
  },
  { 
    name: 'Canny Edge Density', 
    code: 'd_ced',
    description: 'Proportion of edge pixels to detect structural textures'
  },
  { 
    name: 'High-Frequency Ratio', 
    code: 'd_hf',
    description: 'Energy ratio of high-frequency components via 2D FFT'
  },
]

export function MetricsSection() {
  return (
    <section id="metrics" className="border-b border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">Evaluation Framework</Badge>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Evaluation Metrics</h2>
          <p className="text-muted-foreground">Dual-metric suite measuring color precision and purity</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Palette className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Color Precision</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Evaluates in two color spaces: RGB for direct digital pixel alignment, 
              and CIELAB for perceptual alignment.
            </p>
            <div className="space-y-3">
              {precisionMetrics.map((metric) => (
                <div
                  key={metric.name}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-secondary">
                      <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{metric.name}</span>
                        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground">
                          {metric.code}
                        </code>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-2/10">
                <Eye className="h-4 w-4 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Color Purity</h3>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Captures unintended visual artifacts such as irregular textures and inconsistent gradients. 
              Requires no ground truth reference.
            </p>
            <div className="space-y-3">
              {purityMetrics.map((metric) => (
                <div
                  key={metric.name}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-chart-2/30"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{metric.name}</span>
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground">
                      {metric.code}
                    </code>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
              <h4 className="mb-2 text-sm font-medium text-primary">Metric Integration</h4>
              <p className="text-sm text-muted-foreground">
                All metrics are normalized to [0,1] interval. Lower scores indicate better obedience. 
                Mean precision and mean purity serve as unified evaluation metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
