import React from 'react'

import Layout from '../components/layout'
import Posts from '../components/posts'

export default ({ data, pageContext }) => {
  const { posts, tagName } = pageContext

  return (
    <Layout>
      <h1>Posts about {tagName}</h1>
      <Posts data={posts} />
    </Layout>
  )
}
