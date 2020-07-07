import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layouts/layout"

import {
  Wrapper,
  Container,
  BannerHeading,
  PageHeading,
  StyledLink,
} from "../utils/utils"

import BgImage from "../images/bgtxt/project-bg.jpeg"

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

const ProjectWrapper = styled.div`
  background-color: var(--primary-lighter);
  padding-bottom: 7rem;
`
const ProjectContent = styled.div`
  background-color: #fff;
  padding: 5rem;
`
const ProjectImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
`
const Image = styled(Img)`
  box-shadow: 0 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.2);
`

const LinkWrapper = styled.div`
  text-align: center;
`

const Project = () => {
  //Graph QL
  const data = useStaticQuery(graphql`
    query {
      Plan1: file(relativePath: { eq: "plan1.jpg" }) {
        childImageSharp {
          fixed(width: 450, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      Plan2: file(relativePath: { eq: "plan2.png" }) {
        childImageSharp {
          fixed(width: 450, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      Plan3: file(relativePath: { eq: "plan3.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Head title="Projects" />
        <Wrapper>
          <Banner>
            <BannerHeading>Project Planning</BannerHeading>
          </Banner>
          <ProjectWrapper>
            <Container>
              <Wrapper>
                <ProjectContent>
                  <PageHeading>architectural planning</PageHeading>
                  <p>
                    We have an exquisite way of approach towards design and
                    execution. The project goes through various stages before it
                    actually been executed on site. The team at Stacked boxes
                    takes utmost care and attention to detail in every aspect of
                    the project right from the conceptual stages. Our goal
                    towards building economical and sustainable spaces is
                    achieved by our systematic approach towards executing a
                    project.
                  </p>
                  <PageHeading>Type of Work</PageHeading>
                  <p>
                    The type of work ranges from Architecture to interior design
                    to product design. We specialize in giving accelerated
                    design solution for any complicated design related queries.
                    For the past couple of years we have been widely
                    experimenting with shipping containers, with our experience
                    and expertise we have managed to deliver designs executed in
                    the shipping containers and it has proved to be widely
                    successful in all the sector. Our clients have been highly
                    impressed with our vision towards it as we believe it might
                    be the cost effective and less time consuming future for
                    architectural spaces.
                  </p>
                  <ProjectImageWrapper>
                    <Image
                      fixed={data.Plan1.childImageSharp.fixed}
                      alt="Stacked Boxes"
                    />
                    <Image
                      fixed={data.Plan2.childImageSharp.fixed}
                      alt="Stacked Boxes"
                    />
                  </ProjectImageWrapper>
                  <PageHeading>Architecture</PageHeading>
                  <p>
                    “Sustainable yet ideal places to Live” has been our goal
                    towards executing any project. Our Architectural projects
                    shows an array of sustainable spaces incorporated with the
                    high comfort of living. In Indian society, people are more
                    oriented towards luxurious and comfortable spaces to live or
                    work in, we thrive to deliver it in a sustainable approach
                    with a motive of giving back something to the atmosphere and
                    the society we live in.
                  </p>
                  <Image
                    fixed={data.Plan3.childImageSharp.fixed}
                    alt="Stacked Boxes"
                    style={{
                      float: "left",
                      margin: "1rem",
                      marginRight: "4rem",
                    }}
                  />
                  <PageHeading>Interior Design</PageHeading>
                  <p>
                    Our wide range of interior portfolio includes corporate
                    office spaces, commercial spaces, retail design and
                    institutional spaces. Our experience in creating luxurious
                    yet economical interior spaces have helped us to reach
                    clients of various sectors. We work in detail with the
                    materiality and type of products as we believe it enriches
                    and enhances any sort of interior space.
                  </p>
                  <PageHeading>Exterior Façade Design</PageHeading>
                  <p>
                    The external appearance of the building is as important as
                    the interior spaces we live in. A passerby on the road or a
                    common public gets attracted towards the building only by
                    its external appearance. We take projects in renovating the
                    exterior outlook of an already designed or constructed
                    building and convert it to a more elegant looking structure
                    for the client as well as the general user.
                  </p>
                  <PageHeading>Product Design</PageHeading>
                  <p>
                    Our product design wing is a newly developed team which
                    thrives to bring in innovative revolution in creating
                    lifestyle products. One of our main focus is on residential
                    and commercial furniture, space saving invocative design is
                    the future of creating furniture for these spaces as we move
                    towards more economical and space saving design solutions.
                  </p>
                  <PageHeading>Master Planning/ Urbanism</PageHeading>
                  <p>
                    Urban Spaces are the future, as much as people spend time in
                    indoors they tend to spend a considerable amount on the
                    outdoors. We work towards creating diverse urban spaces with
                    the authenticity and the context of the region intact. Every
                    city and Urban pocket has its own distinctive characters,
                    the process in which the characters are enhances is where
                    the successful usage of the urban spaces lie in. We bring in
                    the design experience and the form to blend into in the
                    functionality of the city and the context of the people.
                  </p>
                  <PageHeading>Landscape</PageHeading>
                  <p>
                    In an architectural space, landscape holds an important
                    aspect in developing a sense of space and livability. In a
                    dense urban scenario, the only connection a common citizen
                    can have to the natural atmosphere is the flora and fauna.
                    Landscape has been an integral part in the Indian household
                    for ages, all our planning techniques involve a certain
                    percentage of landscape involvement. We as a team work
                    towards new methodologies with a traditional connect and
                    authenticity in our landscape designs.{" "}
                  </p>
                  <PageHeading>Heritage/Conservation</PageHeading>
                  <p>
                    India is place where traditional architecture and heritage
                    buildings are appreciated even in this modern day word.
                    Madras as a city is known for its art deco houses, Chettinad
                    style residences and many other architectural style with
                    traditional connects. We regularize methods and implement
                    new technologies to restore the heritage and culture in our
                    old villas and buildings. Our team has a wide range of
                    professional experts working on restoration projects over
                    the years,
                  </p>
                  <LinkWrapper>
                    <StyledLink style={{ marginTop: "6rem" }} to="/contact">
                      Start Project
                    </StyledLink>
                  </LinkWrapper>
                </ProjectContent>
              </Wrapper>
            </Container>
          </ProjectWrapper>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Project
