import React from 'react'
//import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/layout';
 
export default function blogTemplate({data}) {
      console.log(data);  
      //let postData = data.allBlogPost.edges;
      //console.log(postData);
      if(!data.allBlogPost.edges){
        console.log("No Edge!!!!");
      }
     // const blog_data = data.allBlogPost.edges.map(post=>
      
    //) 
    return (
        <>
         <Layout></Layout>
         <div>
          <article className="p-lg-4">
              <h1 className="text-center">{data.allBlogPost.edges[0].node.title}</h1>
              <p dangerouslySetInnerHTML={{__html:data.allBlogPost.edges[0].node.body}}></p>
          </article>
      </div>
        </>
  )
}


export const query = graphql `
query BlogByPath($path: String!){
    allBlogPost(filter:{
        path:{
            eq: $path
        }
    }){
        edges{
            node{
                userId
                id
                title
                path
                body
                slug
            }
        }
    }
}
`