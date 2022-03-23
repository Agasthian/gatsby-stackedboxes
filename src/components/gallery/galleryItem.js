import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = styled(Img)`
  flex: 1 1 50%;
`

const Title = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  margin-bottom: 0;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
`

const Text = styled.p`
  margin: 0 0 4rem 0;
`

const GalleryItem = ({ gallery }) => {
  const { title, location, link, image } = gallery.frontmatter

  return (
    <div>
      <Link to={link}>
        <Image fixed={image.childImageSharp.fixed} />
      </Link>
      <Title>{title}</Title>
      <Text>{location}</Text>
      {/* <Text>{category}</Text> */}
    </div>
  )
}

export default GalleryItem
