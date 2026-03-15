'use client'

import { Button } from '@/components/ui/button'
import { Github, FileText, Database, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-sm font-bold text-primary">V</span>
              </div>
              <span className="font-bold text-foreground">VIOLIN Benchmark</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Visual Obedience Level-4 Evaluation for Generative AI. 
              Evaluating the "Paradox of Simplicity" in modern image generation models.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                  <FileText className="h-4 w-4" />
                  Research Paper
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                  <Database className="h-4 w-4" />
                  Download Dataset
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@example.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Citation</h3>
            <div className="rounded-lg border border-border bg-card p-4">
              <pre className="overflow-x-auto text-xs text-muted-foreground">
{`@inproceedings{violin2026,
  title={Exploring the AI Obedience: 
    Why is Generating a Pure Color 
    Image Harder than CyberPunk?},
  author={Anonymous},
  booktitle={ICML},
  year={2026}
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Last Updated: March 2026 · Version 1.0
          </p>
          <p className="text-sm text-muted-foreground">
            ICML 2026 Submission
          </p>
        </div>
      </div>
    </footer>
  )
}
