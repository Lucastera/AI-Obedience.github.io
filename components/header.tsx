'use client'

import Link from 'next/link'
import { Github, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <span className="text-lg font-bold text-primary">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">VIOLIN</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Visual Obedience Benchmark</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="https://github.com/example/violin-benchmark" target="_blank">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <Link href="https://arxiv.org/abs/xxxx.xxxxx" target="_blank">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Paper</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
