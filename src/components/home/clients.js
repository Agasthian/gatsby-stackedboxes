import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Heading from "../ui/heading"
import { Container, Wrapper } from "../../utils/utils"
// import BgImage from "../images/bgtxt/heading04.jpg"

const StyledSection = styled.section`
  min-height: 100vh;
  background-color: var(--white);
`

// const StyledBG = styled.div`
//   border-radius: 3px;
//   box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
//   margin: 0 auto;
//   background-image: linear-gradient(
//       to bottom right,
//       rgba(28, 33, 28, 0.2),
//       rgba(28, 33, 28, 0.4)
//     ),
//     url(${BgImage});
//   background-size: cover;
//   background-position: center;
//   width: 100%;
//   height: 35vh;
// `

const ClientWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  gap:2rem;
  margin-bottom: 6rem;
`
const ClientItem = styled.div`
  text-align: center;

  padding: 7rem;
  background-color: var(--primary-lighter);
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
      <Container>
        <Wrapper>
          <Heading title="CLIENTS" subtitle="Our" />
        </Wrapper>
      </Container>

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
