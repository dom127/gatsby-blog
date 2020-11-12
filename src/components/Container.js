import React from "react"
import { ContainerWrapper } from "../utils/ContainerElements"
import { Nav } from "./Nav"
import { Footer } from "./Footer"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav></Nav>
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
