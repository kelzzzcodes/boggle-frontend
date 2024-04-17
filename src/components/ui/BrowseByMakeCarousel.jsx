import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, A11y } from 'swiper/modules'

import { BrowseByMakeData } from '../../constants/Constants'

const BrowseByMakeCarousel = ({ data, renderItem }) => {
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
        {BrowseByMakeData.map((item, makeIndex) => (
          <SwiperSlide key={makeIndex}>
            <div className="flex items-center justify-center">
              <div
                style={{ boxShadow: '0px 2px 10px 0px #00000040' }}
                className="cursor-pointer flex flex-col gap-2  w-[179px]  h-[201px] rounded-md bg-white  mx-auto overflow-hidden border-b-2 border-b-stone-200"
              >
                <img src={item.image} alt={item.title} />
                <p className="flex mx-auto">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BrowseByMakeCarousel
