import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Heading from "../components/ui/heading"
import { Container, Wrapper, SecondaryHeading } from "../utils/utils"

export const Section = styled.section`
  min-height: 100vh;
  background-color: var(--primary-lighter);
  padding-bottom: 15rem;
`
export const WorksWrapper = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-wrap: wrap;
`
export const WorkImages = styled.div`
  flex: 1 0 60%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1rem;
  padding: 1rem;

  & > * {
    width: 100%;
  }
`

export const WorksItem1 = styled.figure`
  margin: 0;
  overflow: hidden;
  grid-row: 1 / span 4;
  grid-column: 1 / span 2;
  position: relative;
`
export const WorksItem2 = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  grid-row: 1 / span 3;
  grid-column: 3 / span 2;
`
export const WorksItem3 = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  grid-row: 1 / span 5;
  grid-column: 5 / span 2;
`
export const WorksItem4 = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  grid-row: 4 / span 4;
  grid-column: 3 / span 2;
`
export const WorksItem5 = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  grid-row: 5 / span 3;
  grid-column: 1 / span 2;
`
export const WorksItem6 = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  grid-row: 6 / span 2;
  grid-column: 5 / span 2;
`
export const OverlayWrapper = styled.a`
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`
export const OverlayHeading = styled.h5`
  color: var(--primary-blue);
  font-family: inherit;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 1.18px;
  line-height: 1.4;
  text-transform: uppercase;
  margin: 0;
`
export const OverlaySubTitle = styled.p`
  color: var(--primary-light);
  font-weight: 400;
  line-height: 1.4;
  font-size: 17px;
  margin: 0;
`
export const OverlayContent = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  min-width: 58%;
  max-width: 88%;
  background-color: #fff;
  overflow: hidden;
  padding: 22px 12px;
  transform: translateY(100%);
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  ${OverlayWrapper}:hover & {
    bottom: 0px;
    transform: translateY(0%);
  }
`

export const WorksContent = styled.div`
  flex: 1 0 40%;
  background-color: #fff;
  padding: 3rem;
`

export const WorksPara = styled.p`
  font-family: "Neuton", serif;
  font-weight: 300;
  font-size: 2.5rem;
  color: rgba(56, 60, 80, 0.6);
`

const OurWorks = () => {
  //Graph QL
  const data = useStaticQuery(graphql`
    query {
      Work1: file(relativePath: { eq: "Work-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Work2: file(relativePath: { eq: "Work-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Work3: file(relativePath: { eq: "Work-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 350, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Work4: file(relativePath: { eq: "Work-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Work5: file(relativePath: { eq: "Work-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      Work6: file(relativePath: { eq: "Work-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Section>
      <Container>
        <Wrapper>
          <Heading title="Works" subtitle="Our" />
        </Wrapper>
      </Container>

      <WorksWrapper>
        <WorkImages>
          <WorksItem1>
            <OverlayWrapper>
              <Image
                fluid={data.Work1.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
              <OverlayContent>
                <OverlayHeading>residence</OverlayHeading>
                <OverlaySubTitle>South House</OverlaySubTitle>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem1>
          <WorksItem2>
            <OverlayWrapper>
              <Image
                fluid={data.Work2.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
              <OverlayContent>
                <OverlayHeading>CUMI</OverlayHeading>
                <OverlaySubTitle>Commercial</OverlaySubTitle>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem2>
          <WorksItem3>
            <OverlayWrapper>
              <Image
                fluid={data.Work3.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
              <OverlayContent>
                <OverlayHeading>PYT</OverlayHeading>
                <OverlaySubTitle>Office Space</OverlaySubTitle>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem3>
          <WorksItem4>
            <OverlayWrapper>
              <Image
                fluid={data.Work4.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
              <OverlayContent>
                <OverlayHeading>TAFE</OverlayHeading>
                <OverlaySubTitle>Commercial</OverlaySubTitle>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem4>
          <WorksItem5>
            <OverlayWrapper>
              <Image
                fluid={data.Work5.childImageSharp.fluid}
                alt="Stacked Boxes"
              />
              <OverlayContent>
                <OverlayHeading>Mordern</OverlayHeading>
                <OverlaySubTitle>Villa</OverlaySubTitle>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem5>
          <WorksItem6>
            <OverlayWrapper>
              <Image
                fluid={data.Work6.childImageSharp.fluid}
                alt="Stacked Boxes"
                imgStyle={{ objectPosition: "top" }}
              />
              <OverlayContent>
                <OverlayHeading>PYT</OverlayHeading>
              </OverlayContent>
            </OverlayWrapper>
          </WorksItem6>
        </WorkImages>
        <WorksContent>
          <SecondaryHeading>About Us</SecondaryHeading>
          <WorksPara>
            Stacked Boxes is a multidisciplinary design studio established in
            the year 2016 based in Chennai, India. Right from our inception, we
            believe sustainable architecture and interior design are the future
            and much needed for the society. All our projects have a
            considerable amount of atmospheric and global consideration. For the
            past year, we have been working towards changing the urban landscape
            and introduce new architectural ideologies in urban housing.
          </WorksPara>
        </WorksContent>
      </WorksWrapper>
    </Section>
  )
}
export default OurWorks
