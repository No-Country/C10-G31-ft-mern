import Image from 'next/image';
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
      <div className='my-3 px-3'>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
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
            slidesPerView={2.78}
            spaceBetween={15}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='p-2 mb-6'>
        <h2>Popular</h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-1'>
          <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
          <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
          <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
          <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
          <Image className='mx-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
          <Image className='mx-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
        </div>
      </div>
    </>
  )
}

export default HomeSpotech
