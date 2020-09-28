import React from "react"

import Layout from "../components/layouts/layout"
import Head from "../components/head"
import HomeLanding from "../sections/homeLanding"
import OurWorks from "../sections/ourWorks"
import Services from "../sections/services"

import Client from "../sections/clients"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <HomeLanding />
      <OurWorks />
      <Services />

      <Client />
    </Layout>
  )
}

export default Index
