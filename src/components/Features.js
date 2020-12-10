import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

const FeatureGrid = ({ gridItems }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={'auto'}
  >
    {gridItems.map((item, index) => (
      <SwiperSlide key={index}>
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
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

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
