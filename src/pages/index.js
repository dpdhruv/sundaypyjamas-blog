import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import './indexPage.css'


export default function IndexPage({data}) {

  let postData = data.allBlogPost.edges;
  console.log(data);

  const posts = postData.map(post=>
    <div className="col-md-3 card m-lg-2">
      <img className="card-img-top"  src="https://blogs.sundaypyjamas.com/wp-content/uploads/2018/05/1_WbJ3ZF89ZwoO5-ustcuzAQ.jpeg" />
        <h4 className="card-title">
          <Link to={post.node.path}>{post.node.title}</Link>
        </h4>
        <p className="card-text">
         {post.node.body.slice(0,100)+"..."}
        </p> 
    </div>
    )

  return (
    <>
     <Layout></Layout> 
      <div style={{margin:0}} className = "container ml-auto p-lg-3" >
        <div className="row" >
            {posts}
        </div>
      </div>
    </>
  )
}


export const query = graphql `
query {
  allBlogPost(limit:10){
    edges{
      node{
        userId
        id
        title
        body
        path
        slug
      }
    }
  }
}
`