import { Dialog } from "@radix-ui/themes"
import { X } from "lucide-react"

type Props = {
  handleClose: () => void,
  open: boolean,
  content: {
    modal?: string,
    card?: string,
    cta?: string,
    color?: string,
    image?: string
  }
}

export const Modal = ({ content: { modal }, open, handleClose }: Props) => {
  if (!modal) return null

  return <Dialog.Root open={open} onOpenChange={handleClose}>
    <Dialog.Content style={{ background: 'white', color: 'black', borderRadius: 24 }}>
      <div className="flex">
        <h1 className="flex-1 font-bold text-lg tracking-wide">More information</h1>
        <button onClick={handleClose} className="bg-gray-200 rounded-full p-1">
          <X className="text-pine" size={18} />
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: modal }} />
    </Dialog.Content>
  </Dialog.Root>
}