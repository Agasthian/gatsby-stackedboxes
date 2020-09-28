import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, config, animated } from "react-spring"

import BGVideo from "../components/ui/bgVideo"
import Button from "../components/ui/button"
import { Container, Wrapper } from "../utils/utils"

const Section = styled.section`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
`

const Content = styled.div`
  margin-top: 19rem;
  position: absolute;
  color: #fff;
  z-index: 1;
`
const MainHeading = styled(animated.h1)`
  font-size: 7rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 0rem;
`
const SubHeading = styled(animated.h2)`
  font-weight: 600;
  font-size: 1.8rem;
`

const HomeLanding = () => {
  //Animation
  const MainHeadingSpring = useSpring({
    config: config.slow,
    delay: 400,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })
  //Sub heading animation
  const SubHeadingSpring = useSpring({
    config: config.slow,
    delay: 600,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })
  // Button animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 900,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <Section>
      <Container>
        <Wrapper>
          <BGVideo />
          <Content>
            <MainHeading style={MainHeadingSpring}>
              Stacked
              <br />
              Boxes
            </MainHeading>
            <SubHeading style={SubHeadingSpring}>
              A young architecture firm from Chennai
            </SubHeading>
            <Link to="/gallery">
              <Button style={ButtonSpring}>View Projects </Button>
            </Link>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default HomeLanding
