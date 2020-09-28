import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { SecondaryHeadingLight } from "../../utils/utils"
import Map from "../map/map"

const FooterSection = styled.div`
  min-height: 55vh;
  background-color: #23252d;
  color: var(--primary-lighter);
`

const FooterWraper = styled.div`
  display: grid;
  grid-template-columns: 37% 1fr;

  @media ${props => props.theme.mediaQueries.small} {
    grid-template-columns: 1fr;
  }
`
const FooterContent = styled.div`
  padding: 2rem 6rem;
`

const LogoText = styled.h4`
  font-family: inherit;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: 4px;
  color: var(--primary-lighter);
  text-transform: uppercase;
  margin: 3rem 0;
`

const FooteritemsAll = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;
    height: 50vh;
  }
`
const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
`
const FooterTextWrapper = styled.div`
  display: flex;
`

const FooterText = styled.p`
  margin: 0.5rem 0rem;
  color: var(--primary-lighter);
  font-size: 1.6rem;
  line-height: 3rem;
  font-family: "Woodford-Bourne";
`
const StyledLink = styled.a`
  cursor: pointer;
  color: #fff;
  margin-right: 5px;
  margin-top: 6px;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid var(--primary);
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--lighter);
  font-size: 1.5rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--primary-blue);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`

const Heading = styled(SecondaryHeadingLight)`
  & {
    font-size: 1.8rem;
    margin: 8px 0px;
    position: relative;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 5rem;
    height: 2px;
    background: #fff;
    bottom: -4px;
  }
`

const FooterItemSocial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 11vw;
  @media ${props => props.theme.mediaQueries.small} {
    width: 30vw;
  }
`

// Location Object passed as prop to Map Component
const location = {
  address: "Stacked Boxes Architecture, Chennai.",
  lat: 13.079792,
  lng: 80.209609,
}

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            facebook
            email
            instagram
            twitter
          }
        }
      }
    }
  `)

  return (
    <FooterSection>
      <FooterWraper>
        <Map location={location} zoomLevel={18} />
        <FooterContent>
          <LogoText>
            StackedBoxes <br /> Architecture
          </LogoText>
          <FooteritemsAll>
            <FooterItem>
              <Heading>Find Us</Heading>
              <FooterText>
                AJ-122, 9th Main Rd,
                <br />
                Sriram Nagar, A J Block,
                <br />
                Anna Nagar, Chennai,
                <br /> Tamil Nadu 600 040.
              </FooterText>
            </FooterItem>

            <FooterItem>
              <Heading>Let's Talk</Heading>

              <FooterTextWrapper>
                <StyledLink>
                  <StyledIcon icon={faEnvelope} />
                </StyledLink>
                <FooterText>jp@stackedboxes.in</FooterText>
              </FooterTextWrapper>

              <FooterTextWrapper>
                <StyledLink>
                  <StyledIcon icon={faPhoneVolume} />
                </StyledLink>{" "}
                <FooterText> (+91) 78455 97449 </FooterText>
              </FooterTextWrapper>
            </FooterItem>

            <FooterItem row>
              <Heading>Follow Us</Heading>
              <FooterItemSocial>
                <StyledLink
                  href={`https://www.instagram.com/${site.siteMetadata.social.instagram}`}
                  target="_blank"
                  aria-label=""
                >
                  <StyledIcon icon={faInstagram} />
                </StyledLink>
                <StyledLink
                  href={`https://www.facebook.com/${site.siteMetadata.social.facebook}`}
                  target="_blank"
                  aria-label=""
                >
                  <StyledIcon icon={faFacebookF} />
                </StyledLink>
                <StyledLink
                  href={`https://www.twitter.com/${site.siteMetadata.social.twitter}`}
                  target="_blank"
                  aria-label=""
                >
                  <StyledIcon icon={faTwitter} />
                </StyledLink>
              </FooterItemSocial>
            </FooterItem>
          </FooteritemsAll>
        </FooterContent>
      </FooterWraper>
    </FooterSection>
  )
}

export default Footer
