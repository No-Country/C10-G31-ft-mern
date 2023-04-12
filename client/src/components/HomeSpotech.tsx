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
      <div className='mt-6 px-4'>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba1.jpg' width={434} height={186} alt='Ofertas' />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba2.jpg' width={434} height={186} alt='Ofertas' />
          </SwiperSlide>
          <SwiperSlide>
            <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba1.jpg' width={434} height={186} alt='Ofertas' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-4 px-4'>
        <div className='flex items-center justify-between'>
          <h2>Ofertas del Día</h2>
          <div className='flex items-center gap-2 text-sky-400'>
            <p className='text-xs'>Ver todo</p>
            <FaArrowRight className='w-3' />
          </div>
        </div>
        <div className='mt-2'>
          <Swiper
            centeredSlides={false}
            slidesPerView={2.78}
            spaceBetween={15}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image className='mx-auto rounded-lg h-auto w-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto rounded-lg h-auto w-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto rounded-lg h-auto w-auto' src='/prueba1.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='mx-auto rounded-lg h-auto w-auto' src='/prueba2.jpg' width={1200} height={700} alt='Oferta del día' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='px-4 mt-5 mb-10'>
        <h2 className='mb-1'>Popular</h2>
        <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba5.jpg' width={218} height={168} alt='Oferta del día' />
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba6.jpg' width={218} height={168} alt='Oferta del día' />
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba6.jpg' width={218} height={168} alt='Oferta del día' />
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba5.jpg' width={218} height={168} alt='Oferta del día' />
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba5.jpg' width={218} height={168} alt='Oferta del día' />
          <Image className='mx-auto rounded-lg w-auto h-auto' src='/prueba6.jpg' width={218} height={168} alt='Oferta del día' />
        </div>
      </div>
    </>
  )
}

export default HomeSpotech
