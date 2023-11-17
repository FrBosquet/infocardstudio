import { Interview } from "./interview";

const icons: Record<string, React.FC> = {
  interviews: Interview,
}

type Props = {
  name?: string
}

export const Icon = ({ name }: Props) => {
  if (!name) return null

  const Icon = icons[name]

  if (!Icon) return null

  return <Icon />
}