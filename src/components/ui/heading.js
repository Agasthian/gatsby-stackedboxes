import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: inherit;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.125;
  text-transform: uppercase;
  margin: 0;
  color: var(--primary-blue);
`
const Title2 = styled.h1`
  font-family: inherit;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.125;
  text-transform: uppercase;
  margin: 0;
  color: var(--white);
`
const SubTitle = styled.h2`
  font-family: "Woodford-Bourne", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.25;
  text-transform: uppercase;
  margin: 0;
`
const SubTitle2 = styled.h2`
  font-family: "Woodford-Bourne", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.25;
  text-transform: uppercase;
  margin: 0;
  color: var(--white);
`

const Heading = ({ title, subtitle, title2, subtitle2 }) => {
  return (
    <>
      <SubTitle>{subtitle}</SubTitle>
      <Title>{title}</Title>
      <SubTitle2>{subtitle2}</SubTitle2>
      <Title2>{title2}</Title2>
    </>
  )
}
export default Heading
