import React from 'react'
import {graphql, useStaticQuery,Link} from 'gatsby'
import styled from 'styled-components'


//Styled component
const ToppingStyle = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
    margin-bottom:4rem;
    
    a{
        display:grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        padding:5px;
        align-items:center;
        background:white;
        border-radius:2px;
        font-weight: 600;
        font-size: 1.6rem;

        &:visited{
            color: var(--blue);
        }
        .count{
            background: var(--primary);
            padding: 2px 5px;  
        }

        &[aria-current="page"]
        {
            background:var(--primary); 

            .count{
                background: white;
            }
        }
    }
`;

// Count the project in each type - method
const countProjectsInType = (projects)=> {
    
    const counts = projects.map( (project) => project.projecttype)
                    .flat()
                    .reduce((acc,projecttype)=> {
                        //Check if this is an existing type
                        const existingType = acc[projecttype.id];
                        if(existingType){
                            existingType.count +=1;
                        } else {
                            //otherwise create a new wntry in our acc and set it to one
                            acc[projecttype.id] = {
                                id : projecttype.id,
                                name: projecttype.type,
                                count: 1
                            }
                        }
                        return acc;
                    }, {})

    //Sort them based on the count
    const sortedProjects = Object.values(counts).sort((a,b)=>b.count-a.count)

    return sortedProjects
}

const ToppingsFilter = () => {
    // a) fetch Static data of all projects with project type
    const {projects} = useStaticQuery(graphql`
        query{
            projects: allSanityPortfolio {
                nodes {
                    projecttype {
                        type
                        id
                    }
                }
            }
        }
    `)

    // b) Count how many projects in each project-type
    const projectTypeWithCounts = countProjectsInType(projects.nodes)
    // c) Loop over the list of types and display the project type with the count of project
    return (
        <ToppingStyle>
            <Link to='/projects'>
                <span className='name'>All</span>
                <span className='count'>{projects.nodes.length}</span>    
            </Link>
            {
                projectTypeWithCounts.map( (projecttype)=> (
                    <Link to={`/projecttype/${projecttype.name}`} key={projecttype.id}>
                        <span className='name'>{projecttype.name}</span>
                        <span className='count'>{projecttype.count}</span>
                    </Link>
                ))
            }
        </ToppingStyle>
    )
}

export default ToppingsFilter
