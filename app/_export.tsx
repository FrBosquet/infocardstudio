import { Button, Card } from "@radix-ui/themes"
import { useMemo } from "react"
import { Content } from "./_types"

type Props = {
  content: Content
}

export const Export = ({ content }: Props) => {

  const sanitized = useMemo(() => {
    return Object
      .entries(content)
      .reduce<Record<string, string>>((acc, [key, value]) => {
        if (key === 'title') return acc
        if (key === 'image' && value === 'none') return acc
        if (!value) return acc

        return {
          ...acc,
          [key]: value
        }
      }, {})
  }, [content])

  const asString = JSON.stringify(sanitized, null, 2)

  return <Card>
    <div className="flex">
      <h1 className="flex-1 font-bold text-lg tracking-wide">Export</h1>
      <Button className="bg-gray-200 rounded-full p-1" onClick={() => navigator.clipboard.writeText(asString)}>Copy</Button>
    </div>
    <pre className="min-w-[44rem]">
      {asString}
    </pre>
  </Card>
}