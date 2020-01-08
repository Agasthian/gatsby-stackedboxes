import React from "react"
import styled from "styled-components"

import { Container, Wrapper, SecondaryHeadingLight } from "../../utils/utils"

const FooterSection = styled.div`
  min-height: 60vh;
  background-color: #23252d;
  color: var(--primary-lighter);
`
const FooterContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex: 0 0 250px;
`
const FooterItem = styled.div``
const LogoText = styled.h4`
  font-family: inherit;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: 4px;
  color: var(--primary-lighter);
  text-transform: uppercase;
`

const FooterText = styled.p`
  color: var(--primary-lighter);
  font-size: 2rem;
  line-height: 3.2rem;
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Wrapper>
          <FooterContent>
            <FooterItem>
              <LogoText>
                StackedBoxes <br /> Architecture
              </LogoText>
            </FooterItem>
            <FooterItem>
              <SecondaryHeadingLight>Find Us</SecondaryHeadingLight>
              <FooterText>
                AJ-122, 9th Main Rd, <br />
                Sriram Nagar, A J Block,
                <br />
                Anna Nagar, Chennai, <br />
                Tamil Nadu 600040
              </FooterText>
            </FooterItem>
            <FooterItem>
              <SecondaryHeadingLight>Let's Talk</SecondaryHeadingLight>
              <FooterText>
                jp@stackedboxes.in <br /> (+91) 78455 97449
              </FooterText>
            </FooterItem>
            <FooterItem>
              <SecondaryHeadingLight>Follow Us</SecondaryHeadingLight>
              <FooterText>Test</FooterText>
            </FooterItem>
          </FooterContent>
        </Wrapper>
      </Container>
    </FooterSection>
  )
}

export default Footer
