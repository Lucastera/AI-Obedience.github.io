'use client'

import { Badge } from '@/components/ui/badge'
import { variations } from '@/lib/data'
import { Star, StarHalf } from 'lucide-react'

function DifficultyStars({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < level ? 'fill-primary text-primary' : 'text-muted'}`}
        />
      ))}
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="outline" className="mb-4">Research Background</Badge>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Why is Generating a Pure Color Image Harder than CyberPunk?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Recent advances in generative AI have demonstrated remarkable ability to produce high-quality content. 
                However, these models often exhibit a <span className="text-primary font-medium">"Paradox of Simplicity"</span>: 
                while they can render intricate landscapes, they often fail at simple, deterministic tasks.
              </p>
              <p className="leading-relaxed">
                We formalize <span className="text-foreground font-medium">Obedience</span> as the ability to align with instructions 
                and establish a hierarchical grading system ranging from basic semantic alignment to pixel-level systemic precision.
              </p>
              <p className="leading-relaxed">
                Our case studies reveal that high-level obedience is bottlenecked by a tension between explicit logic and implicit visual priors. 
                We identify three key phenomena: <span className="text-foreground">Negation Failure</span>, <span className="text-foreground">Semantic Gravity</span>, 
                and <span className="text-foreground">Aesthetic Inertia</span>.
              </p>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4">Task Variations</Badge>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Six Evaluation Dimensions
            </h2>
            <div className="space-y-3">
              {variations.map((v) => (
                <div
                  key={v.id}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 transition-colors hover:bg-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {v.shortName.split('-')[1]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{v.name}</span>
                      <Badge variant="secondary" className="text-xs">{v.shortName}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{v.description}</p>
                  </div>
                  <div className="hidden sm:block">
                    <DifficultyStars level={v.difficulty} />
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
