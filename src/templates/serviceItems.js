import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

// import { StyledLink } from "../utils/utils"

const ServicesList = styled.div`
  background-color: #fff;
  padding: 30px;
  margin-top: 30px;
  height: 30rem;
  flex: 0 1 300px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.mediaQueries.large} {
    flex: 0 1 265px;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    flex: 0 1 230px;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 20px;
    height: 26rem;
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
  font-size: 2rem;
  color: var(--primary-light);
  word-spacing: 2px;
  text-align: justify;
  margin:0;
`
const StyledImageWrapper = styled.div`
width: 7rem;
height: 7rem;
border-radius: 50%;
border: 3px solid var(--primary);
display: flex;
justify-content:center;
align-items: center;
`;

const StyledImage = styled(Img)`
width: 4rem;
  ;
 
`

const ServiceItems = ({ service }) => {
  const { title, content, image } = service.frontmatter

  
  return (
    <>
      <ServicesList>
        <StyledImageWrapper>
          <StyledImage fluid={image.childImageSharp.fluid} />
        </StyledImageWrapper>
        <ServiceHeading>{title}</ServiceHeading>
        <ServiceText>{content}</ServiceText>
        {/* <StyledLink to={link}>Read More</StyledLink> */}
      </ServicesList>
    </>
  )
}

export default ServiceItems
