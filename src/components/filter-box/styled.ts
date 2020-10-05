import styled from "styled-components"
import { controlFocused } from "../../mixins"
import { getColor, getSizeBy, getValidatedControlColor } from "../../theme/utils"
import { MetaInfo } from "../input/styled"
import { Text } from "../typography"

export const Container = styled.div<{ inline: boolean }>`
  width: 100%;
  height: ${({ inline }) => (inline ? "40px" : "unset")};
  position: relative;
`

export const PlaceholderText = styled(Text)`
  position: absolute;
  left: 0;
  height: 38px;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 30px;
  border-radius: 4px;
  pointer-events: none;
  z-index: 1;
  color: ${getColor("placeholder")};
`

export const FilterContainer = styled.div<{ error?: boolean; inline: boolean }>`
  width: 100%;
  ${({ inline }) => inline && "height: 100%;"}
  position: relative;
  height: 100%;
  .react-filter-box {
    pointer-events: auto;
    height: 38px;
    padding: 4px 6px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    border: 1px solid ${getColor(["controlFocused"])};
    box-shadow: none;

    .CodeMirror {
      height: 38px;
    }
  }

  .react-filter-box.error {
    border-color: ${getValidatedControlColor()};
    box-shadow: none;
  }

  .react-filter-box.focus {
    box-shadow: none;
    ${controlFocused}
  }

  .react-filter-box.error.focus {
    border-color: ${getValidatedControlColor("controlFocused")};
    box-shadow: 0 0 0 1px ${getValidatedControlColor("controlFocused")};
  }
`

export const MetaContainer = styled.div<{
  inline: boolean
  metaDisplay?: "normal" | "compact" | "none"
}>`
  ${({ inline }) =>
    inline &&
    `
  position: absolute;
  left: 0;
`}
  height: ${({ metaDisplay }) => (metaDisplay === "normal" ? "40px" : "20px")};
  width: 100%;
  max-width: 100%;
  display: ${({ metaDisplay }) => (metaDisplay === "none" ? "none" : "flex")};
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const ResultsCount = styled(MetaInfo)`
  color: ${getColor(["text"])};
  margin-left: auto;
  overflow: visible;
`

export const FilterInfo = styled(MetaInfo)<{
  error?: boolean | string
  success?: boolean | string
}>`
  color: ${getValidatedControlColor()};
  flex-shrink: 1;
`
