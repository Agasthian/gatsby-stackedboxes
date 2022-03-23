import React from 'react'
import {Link} from 'gatsby'

import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ProjectGridStyles = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(300px, 1fr));
    gap:2rem;
    grid-auto-rows:auto auto 1fr;
`;

const ProjectStyles = styled.div`
    display:grid; 
    /*subgrid uses - Take your row sizing from the projectGridStyles div(parent)*/
    @supports not(grid-template-rows: subgrid) {
        --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row:span 3;
    grid-gap:1rem;
    
`;


const Title = styled.h3`
  font-family: inherit;
  font-size: 1.6rem;
  margin-bottom: 0;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--primary-blue);
  text-align:center;
`

const Text = styled.p`
  margin: 0;
  text-align:center;
`

const SingleProject = ({project}) => {
    return(
        <ProjectStyles>
            <Link to ={`/project/${project.slug.current}`}>
                <GatsbyImage image={project.image.asset.gatsbyImageData} alt='Sb-Gallery-placeholders'/>
                <Title>{project.name}</Title>
            </Link>
            <Text>{project.location}</Text>
            
        </ProjectStyles>
    )
}


const ProjectList = ({projects}) => {
    return (
        <ProjectGridStyles>
            {projects.map((project) => <SingleProject key={project.id}  project={project} />)}
        </ProjectGridStyles>
    )
}

export default ProjectList
