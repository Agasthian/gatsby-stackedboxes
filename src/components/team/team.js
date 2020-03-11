import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import TeamMember from "./teammember"

import { PageHeading } from "../../utils/utils"

const OurTeamWrapper = styled.div`
  margin-bottom: 5rem;
`

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  -webkit-box-align: start;
  align-items: start;
  padding: 4rem 0px;
  gap: 4rem 2rem;
`

const Team = () => {
  //Graph Ql
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/team/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                name
                designation
                image {
                  childImageSharp {
                    fluid(maxWidth: 350, maxHeight: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
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
    <>
      <OurTeamWrapper>
        <PageHeading>Our Team </PageHeading>
        <ImageWrapper>
          {data.allFile.edges.map(edge => {
            return (
              <TeamMember
                key={edge.node.id}
                team={edge.node.childMarkdownRemark}
              />
            )
          })}
        </ImageWrapper>
      </OurTeamWrapper>
    </>
  )
}

export default Team
