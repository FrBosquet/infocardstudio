import { Card } from "@radix-ui/themes"
import { useMemo } from "react"

type Props = {
  content: {
    modal?: string,
    card?: string,
    cta?: string,
    color?: string,
    image?: string
  }
}

export const Export = ({ content }: Props) => {

  const sanitized = useMemo(() => {
    return Object
      .entries(content)
      .reduce<Record<string, string>>((acc, [key, value]) => {
        if (key === 'image' && value === 'none') return acc
        if (!value) return acc

        return {
          ...acc,
          [key]: value
        }
      }, {})
  }, [content])

  return <div className="min-w-[44rem]">
    {JSON.stringify(sanitized)}

  </div>
}