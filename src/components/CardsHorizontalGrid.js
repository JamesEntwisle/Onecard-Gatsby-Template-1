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
      <SwiperSlide key={index} tabIndex={index}>
        <section className="section" className="card-section">
          <div className="has-text-centered">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <p
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 400,
              paddingLeft: 10,
              paddingBottom: 20,
              maxWidth: 160
            }}
          >
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
