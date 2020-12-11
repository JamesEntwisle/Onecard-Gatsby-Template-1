import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import 'swiper/swiper.scss'

const CardsVerticalGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item, index) => (
      <section key={index} className="section" className="card-section" style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <div className="has-text-centered">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <p className="card-label">
          {item.text}
        </p>
      </section>
    ))}
  </div>
)

CardsVerticalGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default CardsVerticalGrid
