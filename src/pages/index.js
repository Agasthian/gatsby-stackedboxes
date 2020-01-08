import React from "react"

import Layout from "../components/layouts/layout"
import Head from "../components/head"
import HomeLanding from "../sections/homeLanding"
import OurWorks from "../sections/ourWorks"
import Services from "../sections/services"
import HomeFour from "../sections/homeFour"
import Client from "../sections/clients"

const Index = () => {
  return (
    <Layout>
      <Head />
      <HomeLanding />
      <OurWorks />
      <Services />
      <HomeFour />
      <Client />
    </Layout>
  )
}

export default Index
