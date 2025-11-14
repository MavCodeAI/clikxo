import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'bg-neutral-800 animate-pulse'

  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-sm',
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  )
}

export function ProjectSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" variant="text" />
        <Skeleton className="h-4 w-1/2" variant="text" />
      </div>
    </div>
  )
}

export function ServiceSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="w-12 h-12 rounded-sm" />
      <Skeleton className="h-6 w-3/4" variant="text" />
      <Skeleton className="h-16 w-full" variant="text" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" variant="text" />
        <Skeleton className="h-3 w-4/5" variant="text" />
        <Skeleton className="h-3 w-3/4" variant="text" />
      </div>
    </div>
  )
}
