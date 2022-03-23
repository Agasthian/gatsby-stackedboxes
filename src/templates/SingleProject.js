import React, {useState} from 'react'
import {graphql,Link} from 'gatsby'
import { useTransition, animated } from 'react-spring'

import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

import {Wrapper,Container} from '../utils/utils'


/************************** 
//Styled Css
 **************************/
const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--primary-blue);
  font-size: 1.8rem;
  margin-right: 2rem;
`

const GalleryWrapperGrid = styled.div`
display:flex;
gap:2rem;
`
const GalleryHeading = styled.div`
flex: 0 0 20%;
border-right: 1px solid #EBEBEB;
padding-right: 2rem;
`;

const GalleryImages = styled.div`
flex: 1 1 0;
`

const GalleryImage = styled(GatsbyImage)`
margin-bottom:2rem;
`;

const SingProjectWrapper = styled.div`
  padding: 5rem 0 7rem 0;
`
const SingleProjectHeading = styled.h3`
  text-transform: uppercase;
  color: var(--primary-blue);
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: 100;
  text-align:right;
`

const SingleProjectSubHeadingWrapper= styled.div`
  text-align:right;
  position:relative;
`
const Margin = styled.div`
  position:absolute;
  width: 15px;
  border-top: 2px solid var(--primary-blue);
  height: 1px;
  top: 0;
  right:0;
  
`

const SingleProjectSubHeading = styled.h5`
font-weight:800;
font-size:1.4rem;
text-transform: uppercase;
margin-bottom: 0;
padding-top: 1rem;
`

const Content = styled.p`
  margin-top: 1rem;
`;


/************************** 
 * GraphQL Query
 * **************************/
//this needs to be dynamic based on the slug passed in via context in gatsby-node.js 

export const query = graphql`
  query($slug : String!){
    projectinfo : sanityPortfolio(slug : {
        current :  {
            eq : $slug
        }
    }) {
      id
      name
      status
      location
      area
      gallery {
        asset {
          url
          gatsbyImageData(
            layout: FIXED
            width:350
            height:280
            placeholder: BLURRED
            )
        }
      }
      projecttype {
        type
      }
      }

  }
  `
//Test Code
// const slides1 = [
//   'photo-1544511916-0148ccdeb877',
//   'photo-1544572571-ab94fd872ce4',
//   'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
//   'photo-1540206395-68808572332f',
// ]


/************************** 
 Single Project Component 
**************************/
const SingleProject = ({data:{projectinfo}}) => {
  

  //Gallery Animation
  let slides2=[];

  projectinfo.gallery.map ( imgs => {
    return slides2.push(imgs.asset.url)
  })


  // Use State 
  const [index,set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % slides2.length)
      }
    },
    exitBeforeEnter: true,
  })
   
    return (
      <>
        <Container>
          <Wrapper>
              <SingProjectWrapper>
                <>
                <br/>
                <Link to="/projects">
                    <StyledIcon icon={faChevronCircleLeft} /> All Projects
                </Link>
                <GalleryWrapperGrid>
                  <GalleryHeading>
                    <SingleProjectHeading>{projectinfo.name}</SingleProjectHeading>

                      <SingleProjectSubHeadingWrapper>
                        <Margin/>
                        <SingleProjectSubHeading>Location</SingleProjectSubHeading>
                        <Content>{projectinfo.location}</Content>
                      </SingleProjectSubHeadingWrapper>

                      <SingleProjectSubHeadingWrapper>
                        <Margin/>
                        <SingleProjectSubHeading>Status</SingleProjectSubHeading>
                        <Content>{projectinfo.status}</Content>
                      </SingleProjectSubHeadingWrapper>

                      <SingleProjectSubHeadingWrapper>
                        <Margin/>
                        <SingleProjectSubHeading>Area</SingleProjectSubHeading>
                        <Content>{projectinfo.area}</Content>
                      </SingleProjectSubHeadingWrapper>

                      <SingleProjectSubHeadingWrapper>
                        <Margin/>
                        <SingleProjectSubHeading>Project Type</SingleProjectSubHeading>
                        <Content>{projectinfo.projecttype.type}</Content>
                      </SingleProjectSubHeadingWrapper>
                    
                  </GalleryHeading>
                  <GalleryImages>

                    {/* {projectinfo.gallery.map( (image, i) => {
                      return <GalleryImage key={i} image={image.asset.gatsbyImageData} alt='Stacked Boxes Portfolio'/>
                    })} */}

                    {transitions((style, i) => (
                            <animated.div
                              style={{
                                ...style,
                                width: '60vw',
                                height: '70vh',
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                willChange: "opacity",
                                // backgroundImage: `url(https://images.unsplash.com/${slides1[i]}?w=1920&q=80&auto=format&fit=crop)`,
                                backgroundImage: `url(${slides2[i]})`,
                              }}
                            />
                      ))}

                  </GalleryImages>
                </GalleryWrapperGrid>
                </>
              </SingProjectWrapper>
          </Wrapper>
        </Container>
      </>
    )
}

export default SingleProject


