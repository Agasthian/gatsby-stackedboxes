const path = require(`path`)

//******************************
//A) Create pages for every single project 
//************************ ******/
 const turnProjectsIntoPages = async ({ graphql, actions }) => {
     const { createPage } = actions
    //1)Get template for the projects page
    const projectTemplate = path.resolve(`./src/templates/SingleProject.js`)
    //2)Fetch/Query projects data
  const {data} = await graphql(`
    query {
        allSanityPortfolio {
            nodes {
            name
                slug {
                    current
                }
            }
        }
    }
  `)
    //3)Loop each project and create a page for each
  data.allSanityPortfolio.nodes.forEach( (project)=>{
        createPage({
            path:`project/${project.slug.current}`,
            component:projectTemplate,
            context:{
                slug: project.slug.current,
                title: project.name
            }
        })
    })
}

//******************************
//B) Create pages for all project types( filter on the top of the all project page - template use the same project so it can filter and display on the same page)
//************************ ******/
const turnFilterIntoPages = async ({ graphql, actions }) => {
    const { createPage } = actions
   //1)Get template for the projects page
   const filterTemplate = path.resolve(`./src/pages/projects.js`)
   //2)Fetch/Query projects data
 const {data} = await graphql(`
   query {
    projecttype:allSanityProjectype {
        nodes {
          type
          id
        }
      }
   }
 `)
   //3)Loop each project and create a page for each
 data.projecttype.nodes.forEach( (project)=>{
       createPage({
           path:`projecttype/${project.type}`,
           component:filterTemplate,
           context:{
               title: project.type,
               filterRegex: `/${project.type}/i`
           }
       })
   })
}


//Create pages dynamically
exports.createPages = async (params) => {
    // do async work

     await Promise.all([
        turnProjectsIntoPages(params),
        turnFilterIntoPages(params)
     ]) 
  }

//Refernce link to docs - https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/