exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `

  //Creating paginated pages for posts
  const postsPerPage = 4
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPages({
      path: i === 0 ? `/` : `${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Single blog post

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPages({
      path: slug,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    })
  })
}
