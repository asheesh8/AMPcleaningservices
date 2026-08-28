import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * `as` matters: wrapping <li> in a <div> inside an <ol> is invalid markup and
 * costs screen readers the list semantics and the numbering.
 */
export function Reveal({
  children, delay = 0, as: Tag = 'div', className = '',
}: { children: ReactNode; delay?: number; as?: ElementType; className?: string }) {
  const { ref, shown } = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-shown' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
