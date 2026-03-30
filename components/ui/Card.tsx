import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-xl p-6 shadow-lg border border-gray-100', className)}>
      {children}
    </div>
  )
}