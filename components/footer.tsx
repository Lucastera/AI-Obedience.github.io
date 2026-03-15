'use client'

import { Github, FileText } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-sm font-bold text-primary">V</span>
              </div>
              <span className="font-bold text-foreground">VIOLIN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Visual Instruction Obedience Level-4 Evaluation. Evaluating AI's ability to generate pure colors with pixel-perfect precision.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://github.com/example/violin-benchmark"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://arxiv.org/abs/xxxx.xxxxx"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="mb-3 text-sm font-semibold text-foreground">Citation</h3>
            <div className="rounded-lg border border-border bg-card/50 p-3">
              <pre className="overflow-x-auto text-xs text-muted-foreground">
{`@inproceedings{violin2026,
  title={Why is Generating a Pure 
    Color Image Harder than CyberPunk?},
  author={Anonymous},
  booktitle={ICML},
  year={2026}
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          ICML 2026 · Last Updated: March 2026
        </div>
      </div>
    </footer>
  )
}
