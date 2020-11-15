import React from "react"
import { ButtonWrapper } from "../utils/ButtonElements"

export const Button = ({ children, href }) => {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
