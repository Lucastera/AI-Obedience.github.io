'use client'

import Link from 'next/link'
import { Github, FileText, Database, Mail } from 'lucide-react'
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
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#leaderboard" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Leaderboard
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#metrics" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Metrics
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden gap-2 sm:flex" asChild>
            <Link href="https://github.com" target="_blank">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="hidden gap-2 sm:flex" asChild>
            <Link href="#" target="_blank">
              <FileText className="h-4 w-4" />
              <span>Paper</span>
            </Link>
          </Button>
          <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="#" target="_blank">
              <Database className="h-4 w-4" />
              <span>Dataset</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
