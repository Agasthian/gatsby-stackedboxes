import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Head from "../components/head"
import GalleryItem from "../components/gallery/galleryItem"
import Layout from "../components/layouts/layout"

import { Wrapper, Container, BannerHeading } from "../utils/utils"

import BgImage from "../images/bgtxt/work-flow.jpg"

const Banner = styled.div`
  background-image:linear-gradient(
    to bottom right,
    rgba(28, 33, 28, 0.8),
    rgba(252, 208, 107, 0.3)
  ), url(${BgImage});
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
  padding: 7rem 0 7rem 0;
`

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
`

const Gallery = () => {
  //Graph QL
  const { allFile: items } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/gallery/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                location
                link
                category
                image {
                  childImageSharp {
                    fixed(width: 350, height: 240, quality: 100) {
                      ...GatsbyImageSharpFixed_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Gallery" />
      <Wrapper>
        <Banner>
          <BannerHeading>Get Inspired</BannerHeading>
        </Banner>
        <ProjectWrapper>
          {/* <div id="myBtnContainer">
            <button className="btn active" onclick="filterSelection('all')">
              Show all
            </button>
            <button className="btn" onclick="filterSelection('nature')">
              Nature
            </button>
            <button className="btn" onclick="filterSelection('cars')">
              Cars
            </button>
            <button className="btn" onclick="filterSelection('people')">
              People
            </button>
          </div> */}
          <Container>
            <GalleryWrapper>
              {items.edges.map(edge => {
                return (
                  <GalleryItem
                    key={edge.node.id}
                    gallery={edge.node.childMarkdownRemark}
                  />
                )
              })}
            </GalleryWrapper>
          </Container>
        </ProjectWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Gallery
