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
  "https://civilbox.in/wp-content/uploads/2019/12/gallery/prestige/"

const images = [
  {
    original: `${PREFIX_URL}1.jpg`,
    thumbnail: `${PREFIX_URL}1.jpg`,
  },
  {
    original: `${PREFIX_URL}2.jpg`,
    thumbnail: `${PREFIX_URL}2.jpg`,
  },
  {
    original: `${PREFIX_URL}3.jpg`,
    thumbnail: `${PREFIX_URL}3.jpg`,
  },
  {
    original: `${PREFIX_URL}4.jpg`,
    thumbnail: `${PREFIX_URL}4.jpg`,
  },
  {
    original: `${PREFIX_URL}5.jpg`,
    thumbnail: `${PREFIX_URL}5.jpg`,
  },
  {
    original: `${PREFIX_URL}6.jpg`,
    thumbnail: `${PREFIX_URL}6.jpg`,
  },
  {
    original: `${PREFIX_URL}7.jpg`,
    thumbnail: `${PREFIX_URL}7.jpg`,
  },
  {
    original: `${PREFIX_URL}8.jpg`,
    thumbnail: `${PREFIX_URL}8.jpg`,
  },
  {
    original: `${PREFIX_URL}9.jpg`,
    thumbnail: `${PREFIX_URL}9.jpg`,
  },
]

const Cumi = () => {
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
                Prestige Bella Vista
              </GalleryHeading>
              <ImageGallery items={images} />
            </ContentWrapper>
          </Wrapper>
        </Container>
      </Layout>
    </div>
  )
}

export default Cumi
