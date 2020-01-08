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
const PREFIX_URL = "https://civilbox.in/wp-content/uploads/2019/12/gallery/yhm/"

const images = [
  {
    original: `${PREFIX_URL}1.jpeg`,
    thumbnail: `${PREFIX_URL}1.jpeg`,
  },
  {
    original: `${PREFIX_URL}2.jpeg`,
    thumbnail: `${PREFIX_URL}2.jpeg`,
  },
  {
    original: `${PREFIX_URL}3.jpeg`,
    thumbnail: `${PREFIX_URL}3.jpeg`,
  },
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
  {
    original: `${PREFIX_URL}7.jpeg`,
    thumbnail: `${PREFIX_URL}7.jpeg`,
  },
  {
    original: `${PREFIX_URL}8.jpeg`,
    thumbnail: `${PREFIX_URL}8.jpeg`,
  },
  {
    original: `${PREFIX_URL}9.jpeg`,
    thumbnail: `${PREFIX_URL}9.jpeg`,
  },
  {
    original: `${PREFIX_URL}10.jpeg`,
    thumbnail: `${PREFIX_URL}10.jpeg`,
  },
  {
    original: `${PREFIX_URL}11.jpeg`,
    thumbnail: `${PREFIX_URL}11.jpeg`,
  },
  {
    original: `${PREFIX_URL}12.jpeg`,
    thumbnail: `${PREFIX_URL}12.jpeg`,
  },
  {
    original: `${PREFIX_URL}14.jpeg`,
    thumbnail: `${PREFIX_URL}14.jpeg`,
  },
  {
    original: `${PREFIX_URL}15.jpeg`,
    thumbnail: `${PREFIX_URL}15.jpeg`,
  },
  {
    original: `${PREFIX_URL}16.jpeg`,
    thumbnail: `${PREFIX_URL}6.jpeg`,
  },
  {
    original: `${PREFIX_URL}17.jpeg`,
    thumbnail: `${PREFIX_URL}17.jpeg`,
  },
  {
    original: `${PREFIX_URL}18.jpeg`,
    thumbnail: `${PREFIX_URL}18.jpeg`,
  },
  {
    original: `${PREFIX_URL}19.jpeg`,
    thumbnail: `${PREFIX_URL}19.jpeg`,
  },
  {
    original: `${PREFIX_URL}21.jpeg`,
    thumbnail: `${PREFIX_URL}21.jpeg`,
  },
  {
    original: `${PREFIX_URL}22.jpeg`,
    thumbnail: `${PREFIX_URL}22.jpeg`,
  },
  {
    original: `${PREFIX_URL}24.jpeg`,
    thumbnail: `${PREFIX_URL}24.jpeg`,
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
                YHM
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
