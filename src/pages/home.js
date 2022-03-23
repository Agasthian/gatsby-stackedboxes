import React from "react"

import Head from "../components/head"
import HomeLanding from '../components/home/homeLanding'
import OurWorks from "../components/home/ourWorks"
import Services from "../components/home/services"
import Client from "../components/home/clients"

const Index = () => {
  return (
    <>
      <Head title="Home" />
      <HomeLanding />
      <OurWorks />
      <Services />
      <Client />
    </>
  )
}

export default Index
