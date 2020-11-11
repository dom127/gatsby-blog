import React from "react"
import { ContainerWrapper } from "../utils/ContainerElements"
import { Nav } from "../components/Nav"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav></Nav>
      {children}
    </ContainerWrapper>
  )
}

export default Container
