import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

const CardsHorizontalGrid = ({ gridItems }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={2}
  >
    {gridItems.map((item, index) => (
      <SwiperSlide key={index}>
        <section className="section card-section">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p className="card-h-label">
            {item.text}
          </p>
        </section>
      </SwiperSlide>
    ))}
  </Swiper>
)

CardsHorizontalGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default CardsHorizontalGrid
