import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  cursor: pointer;
`

const NavbarLogo = () => {
  //Graphql Query
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fixed(height: 65, quality: 80) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div>
      <StyledLink to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="stackedbox logo" />
      </StyledLink>
    </div>
  )
}

export default NavbarLogo
