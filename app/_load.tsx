import { Select } from "@radix-ui/themes"
import { Content, File } from "./_types"
import { useMemo } from "react"

type Props = {
  loadFile: (key: string) => void
  files: File[]
  selectedFile?: string
}

export const Load = ({ files, selectedFile, loadFile }: Props) => {

  return <Select.Root value={selectedFile} onValueChange={loadFile}>
    <Select.Trigger className="bg-gray-200 rounded-full p-1" />
    <Select.Content className="bg-gray-200 rounded-lg">
      <Select.Item value="new" className="p-2">new file</Select.Item>
      <Select.Separator />
      {
        files.map(([key]) => {
          return <Select.Item key={key} value={key} className="p-2" onClick={() => loadFile(key)}>{key.replace('ics_file_', '')}</Select.Item>
        })
      }
    </Select.Content>
  </Select.Root>
}