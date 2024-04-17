import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, A11y } from 'swiper/modules'

import { BrowseByMakeData } from '../../constants/Constants'

const BrowseByCityCarousel = ({ data, renderItem }) => {
  return (
    <div className=" mx-auto  ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        loop={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {BrowseByMakeData.map((item, cityIndex) => (
          <SwiperSlide key={cityIndex}>
            <div className="flex items-center justify-center ">
              <div className="cursor-pointer flex flex-col gap-2   bg-white mx-auto ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="flex object-cover rounded-[100%] w-[150px]"
                />

                <p className="flex mx-auto">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BrowseByCityCarousel
