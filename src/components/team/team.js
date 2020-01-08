import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import TeamMember from "./teammember"

import { PageHeading } from "../../utils/utils"

const OurTeamWrapper = styled.div`
  margin-bottom: 5rem;
`

const ImageWrapper = styled.div`
  display: flex;
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
