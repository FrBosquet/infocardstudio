import { useState } from "react"
import { Content } from "./_types"
import { Button, TextField } from "@radix-ui/themes"
import { SaveIcon } from "lucide-react"

type Props = {
  content: Content
}

export const Save = ({ content }: Props) => {
  const handleSave = () => {
    localStorage.setItem(`ics_file_${content.title}`, JSON.stringify(content))
  }

  return <div className="flex items-center gap-2">
    <Button disabled={content.title.length === 0} onClick={handleSave} className="bg-gray-200 rounded-full p-1">
      <SaveIcon size={18} />
    </Button>
  </div>
}