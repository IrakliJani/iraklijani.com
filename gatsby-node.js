const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              path
              published
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    createPage({
      path: post.node.frontmatter.path,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        prev: findPublishedNode(posts, index, -1),
        next: findPublishedNode(posts, index, 1),
      },
    })
  })
}

const findPublishedNode = (posts, currentPostIndex, movement) => {
  const index = currentPostIndex + movement
  const post = posts[index]

  if (!post) {
    return null
  } else if (post.node.frontmatter.published) {
    return post
  } else {
    return findPublishedNode(posts, index, movement)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
