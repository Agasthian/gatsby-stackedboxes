import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ImageGallery from "react-image-gallery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layouts/layout"
import { Wrapper, Container, GalleryHeading } from "../utils/utils"

const ContentWrapper = styled.div`
  margin-top: 5rem;
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--primary-blue);
  font-size: 2.5rem;
  margin-right: 2rem;
`
const PREFIX_URL =
  "https://civilbox.in/wp-content/uploads/2019/12/gallery/beachhouse1/"

const images = [
  {
    original: `${PREFIX_URL}4.jpeg`,
    thumbnail: `${PREFIX_URL}4.jpeg`,
  },
  {
    original: `${PREFIX_URL}5.jpeg`,
    thumbnail: `${PREFIX_URL}5.jpeg`,
  },
  {
    original: `${PREFIX_URL}6.jpeg`,
    thumbnail: `${PREFIX_URL}6.jpeg`,
  },
]

const beachHouse = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Wrapper>
            <ContentWrapper>
              <GalleryHeading>
                <Link to="/gallery">
                  <StyledIcon icon={faChevronCircleLeft} />
                </Link>
                Beach House
              </GalleryHeading>
              <ImageGallery items={images} />
            </ContentWrapper>
          </Wrapper>
        </Container>
      </Layout>
    </div>
  )
}

export default beachHouse
