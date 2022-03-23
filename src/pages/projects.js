import React from 'react'
import styled from "styled-components"
import {graphql} from 'gatsby'

import Head from "../components/head"
import Layout from "../components/layouts/layout"
import ProjectList from '../components/projectsList/projectList'
import ToppingsFilter from '../components/toppingsFilter/toppingsFilter.component'

import { Wrapper,Container, BannerHeading} from "../utils/utils"

import BgImage from "../images/bgtxt/project-bg.jpeg"

const Banner = styled.div`
  background-image: linear-gradient(
      to bottom right,
      rgba(28, 33, 28, 0.8),
      rgba(28, 33, 28, 0.2)
    ),
    url(${BgImage});
  background-size: cover;
  background-position: center;
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const ProjectWrapper = styled.div`
  background-color: var(--primary-lighter);
  padding: 5rem 0 7rem 0;
`

const ProjectContainer = styled.div`
    max-width: 160rem;
    z-index: 2;
    padding: 0 4rem;
    margin: 0 auto;
    width: 100%;`

export const query = graphql `
query AllProjects($filterRegex: String) {
    projects: allSanityPortfolio (filter: {projecttype: {elemMatch: {type: {regex: $filterRegex }}}}) {
      nodes {
        name
        id
        status
        location
        slug{
          current
        }
        image {
          asset {
            gatsbyImageData(
              layout: FIXED
              width:350
              height:280
              placeholder: BLURRED
              )
          }
        }
    }
  }
}
`

const Projects = ({data}) => {
    const projects = data.projects.nodes
    
    return (
     <Layout>
         <Head title = 'Projects'/>
         <Wrapper>
          <Banner>
            <BannerHeading>Projects</BannerHeading>
          </Banner>           
             <ProjectWrapper>
                 <Container>
                      <ToppingsFilter/>
                    <ProjectList projects= {projects}/>
                 </Container>
             </ProjectWrapper>
         </Wrapper>
     </Layout>
    )
}

export default Projects
