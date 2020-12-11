import React from 'react'
import PropTypes from 'prop-types'
import { PodcastsPageTemplate } from '../../templates/podcasts-page'

const PodcastsPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <PodcastsPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

PodcastsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PodcastsPagePreview
