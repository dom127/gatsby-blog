import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../utils/FooterElements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram" />
          </a>
        </FooterSocialIcons>
        <p>2020 Dominik J. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
