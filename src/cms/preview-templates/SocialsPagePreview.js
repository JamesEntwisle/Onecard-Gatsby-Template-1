import React from 'react'
import PropTypes from 'prop-types'
import { SocialsPageTemplate } from '../../templates/socials-page'

const SocialsPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <SocialsPageTemplate
      title={entry.getIn(['data', 'title'])}
      intro={{ blurbs }}
    />
  )
}

SocialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SocialsPagePreview
