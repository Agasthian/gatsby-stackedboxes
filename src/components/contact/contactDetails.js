import React from "react"
import styled from "styled-components"
import { faEnvelopeOpen, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { SubHeading, Heading } from "../../utils/utils"

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--primary-blue);
  font-size: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
`

const Contactdetails = () => {
  return (
    <>
      <SubHeading>Contact</SubHeading>
      <Heading>Let’s start new project.</Heading>
      <p>Tell us about your dream, let's make it a reality.</p>
      <p>
        <StyledIcon icon={faEnvelopeOpen} /> stackedboxes@stackedboxes.in
        <StyledIcon icon={faPhoneAlt} /> (+91) 78455 97449
      </p>
    </>
  )
}

export default Contactdetails
