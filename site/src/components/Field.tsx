import type { ReactNode } from 'react'

export function Field({
  label, hint, htmlFor, children, required,
}: { label: string; hint?: string; htmlFor: string; children: ReactNode; required?: boolean }) {
  return (
    <p className="field">
      <label htmlFor={htmlFor}>
        {label}
        {required ? <span aria-hidden="true" className="field__req"> *</span> : null}
      </label>
      {hint ? <span className="field__hint">{hint}</span> : null}
      {children}
    </p>
  )
}
