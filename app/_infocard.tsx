import { Card } from "@radix-ui/themes"
import { ArrowRight } from "lucide-react";
import { Icon } from "./_icons";

type Props = {
  handleCTA: () => void,
  content: {
    modal?: string,
    card?: string,
    cta?: string,
    color?: string,
    image?: string
  }
}

export const InfoCard = ({ content, handleCTA }: Props) => {
  if (!content.card) return null

  return <div
    data-color={content.color}
    className="min-w-[44rem] text-black p-4 rounded-2xl tracking-wide bg-card-blue data-[color=green]:bg-card-green"
  >
    <div className="flex">
      <div className="flex-1">
        <p>{content.card}</p>
        {
          content.cta
            ? <button onClick={handleCTA} className="flex items-center font-semibold text-pine pt-3">{content.cta} <ArrowRight size={16} /></button>
            : null
        }
      </div>
      <Icon name={content.image} />
    </div>
  </div>
}