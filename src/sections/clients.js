import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Heading from "../components/ui/heading"
import { Container, Wrapper } from "../utils/utils"
import BgImage from "../images/bgtxt/heading04.jpg"

const StyledSection = styled.section`
  min-height: 100vh;
  background-color: var(--primary-lighter);
`

const StyledBG = styled.div`
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 35vh;
`

const ClientWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 6rem;
`
const ClientItem = styled.div`
  text-align: center;
  flex: 0 1 25%;
  padding: 7rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Client = () => {
  //Graph ql
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "logo/clientlogo" }
          extension: { regex: "/(jpg)|(png)/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 100, height: 100, quality: 100) {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSection>
      <StyledBG>
        <Container>
          <Wrapper>
            <Heading title2="CLIENTS" subtitle2="Our" />
          </Wrapper>
        </Container>
      </StyledBG>
      <Container>
        <Wrapper>
          <ClientWrapper>
            {data.allFile.edges.map(edge => {
              return (
                <ClientItem>
                  <Img fixed={edge.node.childImageSharp.fixed} />
                </ClientItem>
              )
            })}
          </ClientWrapper>
        </Wrapper>
      </Container>
    </StyledSection>
  )
}

export default Client
