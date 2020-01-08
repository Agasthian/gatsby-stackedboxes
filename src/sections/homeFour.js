import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, config, animated } from "react-spring"
import styled from "styled-components"
import Img from "gatsby-image"

import { Container, Wrapper } from "../utils/utils"

const Section = styled.section`
  min-height: 100vh;
`

const Content = styled.div`
  display: flex;
  margin-top: 7rem;

  @media ${props => props.theme.mediaQueries.medium} {
    flex-wrap: wrap;
  }
`
const ImageWrapper = styled.div`
  flex: 1 0 60%;
  position: relative;
`
const Image2 = styled(Img)`
  box-shadow: 0 1rem 2rem var(--shadow-light);
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 1.5rem 4rem var(--shadow-dark);
    z-index: 20;
  }
`
const Image1 = styled(Img)`
  box-shadow: 0 1rem 2rem var(--shadow-light);
  border-radius: 2px;
  right: -6rem;
  bottom: -4rem;
  z-index: 2;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 1.5rem 4rem var(--shadow-dark);
    z-index: 20;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  @media ${props => props.theme.mediaQueries.medium} {
    padding-left: 0;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`
const MainHeading = styled(animated.h1)`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--primary-blue);
  display: flex;
  align-self: center;
  margin-bottom: 0;
  margin-top: 0;
`

const HomeFour = () => {
  //Graph QL
  const data = useStaticQuery(graphql`
    query {
      Image1: file(relativePath: { eq: "home-img-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 350, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Image2: file(relativePath: { eq: "home-img-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 696, maxHeight: 350, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  //Animation
  const MainHeadingSpring = useSpring({
    config: config.slow,
    delay: 1400,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })
  return (
    <Section>
      <Container>
        <Wrapper>
          <Content>
            <ImageWrapper>
              {/* <Image1
                fluid={data.Image1.childImageSharp.fluid}
                alt='Stacked Boxes'
                style={{ position: 'absolute' }}
              /> */}
              <Image2
                fluid={data.Image2.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
            </ImageWrapper>
            <TextWrapper>
              <MainHeading style={MainHeadingSpring}>
                Design that works with you
              </MainHeading>
              <p>
                Combining proven construction methods with next-gen technology
                to build beautiful, high-performing + cost-effective
                environments.
              </p>
            </TextWrapper>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default HomeFour
