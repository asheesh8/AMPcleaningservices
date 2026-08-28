import { useEffect } from 'react'

/** Per-route <title> and description. Every route shared one title before. */
export function PageMeta({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title
    if (description) {
      let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = 'description'
        document.head.appendChild(tag)
      }
      tag.content = description
    }
  }, [title, description])
  return null
}
