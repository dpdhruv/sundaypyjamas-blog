const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = ({
        actions,
        createNodeId,
        createContentDigest
    },
    configOptions
) => {
    const {
        createNode
    } = actions

    // Gatsby adds a configOption that's not needed for this plugin, delete it
    delete configOptions.plugins
    // Helper function that processes a photo to match Gatsby's node structure
    const processPhoto = post => {
        const nodeId = createNodeId(`blog-post-${post.id}`)
        const nodeContent = JSON.stringify(post)
        const nodeData = Object.assign({}, post, {
            id: nodeId,
            parent: null,
            children: [],
            internal: {
                type: `BlogPost`,
                content: nodeContent,
                contentDigest: createContentDigest(post),
            },
        })

        return nodeData
    }

    // Convert the options object into a query string
    const apiOptions = queryString.stringify(configOptions)

    // Join apiOptions with the Pixabay API URL
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`

    // Gatsby expects sourceNodes to return a promise
    return (
        // Fetch a response from the apiUrl
        fetch(apiUrl)
        // Parse the response as JSON
        .then(response => response.json())
        // Process the response data into a node
        .then(data => {
            // For each query result (or 'hit')
            data.forEach(post => {

                post['slug']= post.title;
                post['path']= '/'+post.title.replace(/ /g,"-");
                console.log(post);
                // Process the photo data to match the structure of a Gatsby node
                const nodeData = processPhoto(post)
                // Use Gatsby's createNode helper to create a node from the node data
                createNode(nodeData)
            })
        })
    )
}