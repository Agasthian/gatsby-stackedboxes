import React from "react"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import GlobalStyles from "../../utils/styles/global"
import theme from "../../utils/styles/theme"
import Navbar from "../navigation/navbar"
import Footer from "../footer/footer"
import "../../fonts/woodford-bourne.css"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--background);
  color: var(--text);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar />
        <StyledMain>{props.children}</StyledMain>
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}
export default Layout
