import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layouts/layout"
import OurTeam from "../components/team/team"

import {
  Wrapper,
  Container,
  BannerHeading,
  SubHeading,
  Heading,
} from "../utils/utils"
import BgImage from "../images/bgtxt/aboutus.jpg"

const Banner = styled.div`
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.div`
  flex: 0 0 60%;
  padding-right: 2rem;
`

const PhotoWrapper = styled.div`
  flex: 1 0 250px;
`

const Photo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledImg = styled(Img)`
  width: 50%;
  margin-right: 2rem;
`

const About = () => {
  //Graph QL
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "aboutus" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid {
                aspectRatio
                base64
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Wrapper>
          <Banner>
            <BannerHeading>About Us</BannerHeading>
          </Banner>
          <Container>
            <ContentWrapper>
              <Text>
                <SubHeading>Our Ideology</SubHeading>
                <Heading>
                  Break out of your routine with <br /> a global perspective.
                </Heading>
                <p>
                  Stacked Boxes is a multidisciplinary design studio established
                  in the year 2016 based in Chennai, India. Right from our
                  inception, we believe sustainable architecture and interior
                  design are the future and much needed for the society. All our
                  projects have a considerable amount of atmospheric and global
                  consideration.
                </p>
              </Text>
              <PhotoWrapper>
                <Photo>
                  {data.allFile.edges.map(({ node }) => (
                    <StyledImg fluid={node.childImageSharp.fluid} />
                  ))}
                </Photo>
              </PhotoWrapper>
            </ContentWrapper>
            <p>
              For the past year, we have been working towards changing the urban
              landscape and introduce new architectural ideologies in urban
              housing. Affordable housing is forever a dream for many household
              Indian citizens in this ever changing economy, our motive is to
              create an ideal economical architectural solution for any design
              related queries.
            </p>
            <p>
              Interiors and product design has been an another area of our
              expertise, over the couple of years we have executed projects for
              new startups, given them ideal, luxurious yet affordable design
              solutions in creating their own office spaces. Our team works
              towards the betterment of the design day in and day out and we
              thrive to deliver the best for our clients at any given timeframe.{" "}
            </p>
            <p>
              Our work culture and atmosphere is enhanced by collaborative
              thinking, non- hierarchical work culture which involves the entire
              team to vouch for and take unanimous project decisions. Our team
              includes people from multidisciplinary aspects of Architects,
              Interior Designers, Product Designers, Urbanists, Graphic
              designers and other professionals.{" "}
            </p>
            <OurTeam />
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}
export default About
