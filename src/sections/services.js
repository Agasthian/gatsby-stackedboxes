import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BgImage from "../images/bgtxt/heading02.jpg"

import ServiceItems from "../templates/serviceItems"
import Heading from "../components/ui/heading"

import { Container, Wrapper } from "../utils/utils"

const Section = styled.section`
  min-height: 135vh;
  background-color: #eef1f2;

  @media ${props => props.theme.mediaQueries.small} {
    min-height: 140vh;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    min-height: 235vh;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    min-height: 200rem;
  }
  @media ${props => props.theme.mediaQueries.micro} {
    min-height: 315vh;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    min-height: 80vh;
  }
`

const StyledBG = styled.div`
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  background-image: linear-gradient(
      to bottom right,
      rgba(28, 33, 28, 0.8),
      rgba(252, 208, 107, 0.3)
    ),
    url(${BgImage});
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 50vh;
  @media ${props => props.theme.mediaQueries.large} {
    background-size: cover;
  }
`

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
`

const Services = () => {
  //graphql
  const { allFile: items } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/services/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                link
                content
              }
              html
            }
          }
        }
      }
    }
  `)

  return (
    <Section className="cards">
      <StyledBG>
        <Container>
          <Wrapper>
            <Heading title2="WHAT WE DO" subtitle2="" />
            <ServicesWrapper>
              {items.edges.map(edge => {
                return (
                  <ServiceItems
                    key={edge.node.id}
                    service={edge.node.childMarkdownRemark}
                  />
                )
              })}
            </ServicesWrapper>
          </Wrapper>
        </Container>
      </StyledBG>
    </Section>
  )
}

export default Services
