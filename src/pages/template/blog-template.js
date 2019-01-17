import React from 'react'
//import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/layout';
 
export default function blogTemplate({data}) {
      let postData = data.allBlogPost.edges;
      console.log(postData);
      const blog_data = postData.map(post=>
      <div>
          <article className="p-lg-4">
              <h1 clssName="text-center">{post.node.title}</h1>
              <p dangerouslySetInnerHTML={{__html:post.node.body}}></p>
          </article>
      </div>
    ) 
    return (
        <>
         <Layout></Layout>
         {blog_data}
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