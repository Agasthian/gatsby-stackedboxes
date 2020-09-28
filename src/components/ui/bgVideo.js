import React from "react"
import styled from "styled-components"

import BgVideo from "../../images/bg-vid-1.mp4"

const VideoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`
const StyledVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

const VideoOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
  display: none;
`

const BGVideo = () => {
  return (
    <VideoWrapper>
      <VideoOverlay></VideoOverlay>
      <StyledVideo width="900" loop autoPlay muted playsinline>
        <source src={BgVideo} type="video/mp4" />
      </StyledVideo>
    </VideoWrapper>
  )
}

export default BGVideo
