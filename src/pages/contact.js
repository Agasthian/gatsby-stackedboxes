import React from "react"
import styled from "styled-components"

import Head from "../components/head"
import Form from "../components/contact/form"
import Contactdetails from "../components/contact/contactDetails"

import { Wrapper, BannerHeading } from "../utils/utils"
import BgImage from "../images/bgtxt/contactus.jpg"

const Banner = styled.div`
  background-image: linear-gradient(
      to bottom right,
      rgba(28, 33, 28, 0.8),
      rgba(28, 33, 28, 0.2)
    ),
    url(${BgImage});
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactWrapper = styled.div`
  min-height: 40rem;
  display: flex;
  flex-wrap: wrap;
`
const ContactAddress = styled.div`
  background-color: #fff;
  flex: 1 1 500px;
`
const ContactForm = styled.div`
  background-color: var(--primary-lighter);
  flex: 1 1 500px;
`
const Padding = styled.div`
  padding: 7rem;
`

const contact = () => {
  return (
    <>
      <Head title="Contact Us" />
      <Wrapper>
        <Banner>
          <BannerHeading>Contact us</BannerHeading>
        </Banner>
      </Wrapper>
      <ContactWrapper>
        <ContactAddress>
          <Padding>
            <Contactdetails />
          </Padding>
        </ContactAddress>
        <ContactForm>
          <Padding>
            <Form />
          </Padding>
        </ContactForm>
      </ContactWrapper>
    </>
  )
}

export default contact
