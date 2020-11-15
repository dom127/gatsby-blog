import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p:nth-child(1) {
    font-size: 0.8rem;
    text-align: center;
    margin: 0 0 0.5rem;
    color: hsl(227, 2%, 26%);
  }
  & h2 {
    text-align: center;
    margin: 0 0 1rem 0;
  }
  & p {
    font-size: 1rem;
    color: hsl(227, 2%, 26%);
    line-height: 1.4em;
    text-align: center;
    margin: 0 0 1.5rem 0;
  }
`
