import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//Styled components
const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`

const StyledLink = styled(Link)`
    font-family: inherit;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--text);
    padding: 1rem 2rem;
    font-size: 1.3rem;
    transition: all 0.2s ease-out;
    letter-spacing:1px;

    &:hover {
        color: var(--primary);
      }
}`

//Side drawer component
const SideDrawer = ({ setMenuOpened, ...rest }) => {
  return (
    <Wrapper {...rest}>        
      <StyledLink mobile onClick={() => setMenuOpened(false)}  to={`/home`}> Home </StyledLink>
      <StyledLink mobile onClick={() => setMenuOpened(false)}  to={`/projects`}> Projects </StyledLink>
      <StyledLink mobile onClick={() => setMenuOpened(false)} to={`/about-us`}> About Us </StyledLink>
      <StyledLink mobile onClick={() => setMenuOpened(false)} to={`/contact`}> Contact Us </StyledLink>
    </Wrapper>
  )
}

export default SideDrawer
