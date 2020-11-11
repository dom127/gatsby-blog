import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../utils/NavElements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gtx-logo.png" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} />
      </Link>
    </NavWrapper>
  )
}
