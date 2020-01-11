import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 100%;
  margin-right: 2rem;
`
const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
`
const Text = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
  margin-bottom: 0;
`
const Desgnation = styled.h4`
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
  margin-top: 0.5rem;
`
const MemberWrapper = styled.div`
  display: block;
  width: 100%;
  margin-right: 2rem;
`

const TeamMember = ({ team }) => {
  const { name, image, designation } = team.frontmatter
  return (
    <>
      <MemberWrapper>
        <Image fluid={image.childImageSharp.fluid} />
        <ImageItem>
          <Text>{name}</Text>
          <Desgnation>{designation}</Desgnation>
        </ImageItem>
      </MemberWrapper>
    </>
  )
}

export default TeamMember
