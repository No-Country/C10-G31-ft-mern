import Header from './shared/Header';
import { FaArrowRight } from 'react-icons/fa'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const HomeSpotech = () => {

  SwiperCore.use([Autoplay]);

  return (
    <>
      <Header />
      <div className='my-3'>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div className='bg-gray-800 rounded-md w-80 h-28 mx-auto'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-gray-600 rounded-md w-80 h-28 mx-auto'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-gray-400 rounded-md w-80 h-28 mx-auto'></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-3 p-2'>
        <div className='flex items-center justify-between'>
          <h2>Ofertas del Día</h2>
          <div className='flex gap-2 text-sky-400'>
            <p className='text-xs'>Ver todo</p>
            <FaArrowRight />
          </div>
        </div>
        <div>
          <Swiper
            centeredSlides={false}
            slidesPerView={2.8}
            spaceBetween={0}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='bg-gray-800 rounded-md w-28 h-12 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-600 rounded-md w-28 h-12 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-400 rounded-md w-28 h-12 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-800 rounded-md w-28 h-12 mx-auto'></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='p-2 mb-6'>
        <h2>Popular</h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
          <div className='bg-gray-800 rounded-md w-40 h-28 mx-auto'></div>
        </div>
      </div>
    </>
  )
}

export default HomeSpotech
