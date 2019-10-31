import React, { FC } from "react"
import { iconsList } from "./icons-list"
import { StyledIcon } from "./styled"

export interface IconProps {
  name: string
  size?: "small" | "medium" | "large"
  className?: string
}

const getSize = filename => {
  if (filename.endsWith("_s")) {
    return "small"
  }
  if (filename.endsWith("_l")) {
    return "large"
  }
  return "medium"
}

export const Icon: FC<IconProps> = ({ name, className, size }: IconProps) => {
  const iconSymbol = iconsList[name]

  if (!iconSymbol) {
    return null
  }

  const iconSize = size || getSize(name)

  return (
    <StyledIcon size={iconSize} className={className} viewBox={iconSymbol.viewBox}>
      <use xlinkHref={`#${iconSymbol.id}`} />
    </StyledIcon>
  )
}
