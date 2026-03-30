import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function Section({ children, className, id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        dark ? 'bg-brand-dark text-white' : '',
        className
      )}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}