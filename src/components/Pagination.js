import React from "react"
import {
  PaginationElement,
  PaginationWrapper,
} from "../utils/PaginationElements"

export const Pagination = ({ isFirst, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst}>
      <PaginationElement to={prevPage}>Prev page</PaginationElement>
      <PaginationElement to={nextPage}>Next page</PaginationElement>
    </PaginationWrapper>
  )
}
