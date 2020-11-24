import React from "react"
import { Text } from "src/components/typography"
import { Input, Container, IconContainer, StyledIcon } from "./styled"

const RadioButton = ({ label, checked, disabled, children, margin, alignSelf, ...rest }) => (
  <Container disabled={disabled} margin={margin} alignSelf={alignSelf}>
    <Input type="radio" disabled={disabled} checked={checked} {...rest} />
    <IconContainer
      borderColor={disabled ? "selected" : "border"}
      margin={children || label ? [0, 4, 0, 0] : null}
    >
      {checked && <StyledIcon name="dot" color={disabled ? "disabled" : "primary"} />}
    </IconContainer>
    {children}
    {label && !children && <Text>{label}</Text>}
  </Container>
)

export default RadioButton
