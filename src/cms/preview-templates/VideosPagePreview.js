import React from 'react'
import PropTypes from 'prop-types'
import { VideosPageTemplate } from '../../templates/videos-page'

const VideosPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <VideosPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

VideosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default VideosPagePreview
