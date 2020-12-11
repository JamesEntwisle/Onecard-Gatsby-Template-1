import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SocialIcon } from 'react-social-icons'

const SocialIcons = () => (
  <div style={{ background: 'whitesmoke', width: '100%', padding: '30px 20px', }}>
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
    >
      <SwiperSlide>
        <SocialIcon url="https://facebook.com" />
      </SwiperSlide>
      <SwiperSlide>
        <SocialIcon url="https://instagram.com" />
      </SwiperSlide>
      <SwiperSlide>
        <SocialIcon url="https://linkedin.com" />
      </SwiperSlide>
      <SwiperSlide>
        <SocialIcon url="https://twitter.com/jaketrent" />
      </SwiperSlide>
      <SwiperSlide>
        <SocialIcon url="https://tiktok.com" />
      </SwiperSlide>
      <SwiperSlide>
        <SocialIcon url="https://pinterest.com" />
      </SwiperSlide>
    </Swiper>
  </div>
)

export default SocialIcons
