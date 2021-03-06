import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ImageGallery from "react-image-gallery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

import Head from "../components/head"
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
const PREFIX_URL = "http://assetfoundation.in/wp-content/uploads/sb/yhm/"

const images = [
  {
    original: `${PREFIX_URL}1new.jpeg`,
    thumbnail: `${PREFIX_URL}1new.jpeg`,
  },
  {
    original: `${PREFIX_URL}3.jpeg`,
    thumbnail: `${PREFIX_URL}3.jpeg`,
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
    original: `${PREFIX_URL}2new.jpeg`,
    thumbnail: `${PREFIX_URL}2new.jpeg`,
  },
  {
    original: `${PREFIX_URL}4.jpeg`,
    thumbnail: `${PREFIX_URL}4.jpeg`,
  },
  {
    original: `${PREFIX_URL}7.jpeg`,
    thumbnail: `${PREFIX_URL}7.jpeg`,
  },
  {
    original: `${PREFIX_URL}9.jpeg`,
    thumbnail: `${PREFIX_URL}9.jpeg`,
  },
  {
    original: `${PREFIX_URL}11.jpeg`,
    thumbnail: `${PREFIX_URL}11.jpeg`,
  },
  {
    original: `${PREFIX_URL}10new1.jpeg`,
    thumbnail: `${PREFIX_URL}10new1.jpeg`,
  },
  {
    original: `${PREFIX_URL}12new.jpeg`,
    thumbnail: `${PREFIX_URL}12new.jpeg`,
  },
  {
    original: `${PREFIX_URL}14new.jpeg`,
    thumbnail: `${PREFIX_URL}14new.jpeg`,
  },
  {
    original: `${PREFIX_URL}15new.jpeg`,
    thumbnail: `${PREFIX_URL}15new.jpeg`,
  },
  {
    original: `${PREFIX_URL}16new.jpeg`,
    thumbnail: `${PREFIX_URL}16new.jpeg`,
  },
  {
    original: `${PREFIX_URL}17.jpeg`,
    thumbnail: `${PREFIX_URL}17.jpeg`,
  },
  {
    original: `${PREFIX_URL}19.jpeg`,
    thumbnail: `${PREFIX_URL}19.jpeg`,
  },
  {
    original: `${PREFIX_URL}18new.jpeg`,
    thumbnail: `${PREFIX_URL}18new.jpeg`,
  },
  {
    original: `${PREFIX_URL}22new.jpeg`,
    thumbnail: `${PREFIX_URL}22new.jpeg`,
  },
  {
    original: `${PREFIX_URL}24new.jpeg`,
    thumbnail: `${PREFIX_URL}24new.jpeg`,
  },
]

const Cumi = () => {
  return (
    <div>
      <Layout>
        <Head title="YHM" />
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
