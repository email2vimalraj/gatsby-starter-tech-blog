import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Posts from '../components/posts'

export default ({ data }) => (
  <Layout>
    <Posts data={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`
