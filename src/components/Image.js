import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Images } from "../utils/ImageElements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "work-office.jpg" } }) {
        fixed(width: 1920) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <Images>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Images>
  )
}
