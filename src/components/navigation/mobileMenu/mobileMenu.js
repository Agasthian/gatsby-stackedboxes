import React from "react"
import { useTransition, animated, config } from "react-spring"
import styled from 'styled-components'

import HamburgerToggler from "./hamburgerToggle"
import SideDrawer from "./sideDrawer"



const BackgroundWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: var(--background);
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  transition: background 0.2s ease-out;
`

const MobileMenu = ({ menuOpened, setMenuOpened }) => {
  // Animation for the side drawer
  // If on 404 page, dont render menu, because menu links are from react-scroll, won't work there. Logo is prepared to be clicked and will work


  const transitions = useTransition(menuOpened, {
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
    config: config.molasses,
  })


  return (
    <>
      <HamburgerToggler
        menuOpened={menuOpened}
        toggleChange={() => setMenuOpened(!menuOpened)}
      />      
      {transitions((style,item)=>
        item ?
          
        <BackgroundWrapper style={style}>
          <SideDrawer setMenuOpened={setMenuOpened} />
        </BackgroundWrapper>
        : ''
      )}
              
    </>
  )
}

export default MobileMenu
