import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

import { StyledLink } from "../utils/utils"

const ServicesList = styled.div`
  background-color: #fff;
  padding: 30px;
  margin-top: 30px;
  height: 30rem;
  font-size: 2rem;
  flex: 0 1 300px;

  @media ${props => props.theme.mediaQueries.large} {
    flex: 0 1 265px;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    flex: 0 1 230px;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    flex: 0 1 230px;
  }
`

const ServiceHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
`
const ServiceText = styled.p`
  font-size: 1.8rem;
  color: var(--primary-light);
  word-spacing: 2px;
`

// const Image = styled(Img)`
//   width: 50%;
// `

const ServiceItems = ({ service }) => {
  const { title, link } = service.frontmatter
  return (
    <>
      <ServicesList>
        {/* <Image fluid={image.childImageSharp.fluid} /> */}
        <ServiceHeading>{title}</ServiceHeading>
        <ServiceText dangerouslySetInnerHTML={{ __html: service.html }} />
        <StyledLink to={link}>Read More</StyledLink>
      </ServicesList>
    </>
  )
}

export default ServiceItems
