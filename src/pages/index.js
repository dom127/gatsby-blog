import React from "react"
import { Container } from "../components/Container"
import { FeatureImage } from "../components/Image"
import { Content } from "../components/Content"
import { ContentCard } from "../components/ContentCard"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage></FeatureImage>
      <Content>
        <ContentCard
          date="14.11.2020"
          title="First post"
          excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          slug="first-post"
        />
        <ContentCard
          date="15.11.2020"
          title="Second post"
          excerpt="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          slug="second-post"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
