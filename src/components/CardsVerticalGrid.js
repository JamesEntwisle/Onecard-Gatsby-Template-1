import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

const CardsVerticalGrid = ({ gridItems }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={2}
  >
    {gridItems.map((item, index) => (
      <section key={index} className="section" className="card-section" style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <div className="has-text-centered">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <p
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 400,
            paddingLeft: 10,
            paddingBottom: 20,
          }}
        >
          {item.text}
        </p>
      </section>
    ))}
  </Swiper>
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
