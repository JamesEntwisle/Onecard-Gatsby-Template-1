import React from 'react'
import PropTypes from 'prop-types'
import { BlogsPageTemplate } from '../../templates/blogs-page'

const BlogsPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <BlogsPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

BlogsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BlogsPagePreview
