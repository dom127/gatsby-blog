import React from "react"
import { CardWrapper } from "../utils/CardElements"
import { Button } from "./Button"

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Button href={slug}>Read more</Button>
    </CardWrapper>
  )
}
