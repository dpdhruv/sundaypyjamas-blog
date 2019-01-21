const path = require(`path`)



exports.createPages = ({ page,graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/template/blog-template.js`)


  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
    {
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
  `).then(result => {
    console.log("Results" , result);
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allBlogPost.edges.forEach(post => {
      createPage({
        // Path for this page — required
        path: post.node.path,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
