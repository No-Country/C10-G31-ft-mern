import Image from 'next/image';
import Link from 'next/link';
import Header from './shared/Header';
import { FaArrowRight } from 'react-icons/fa'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState, useEffect } from 'react'
import clienteAxios from '@/config/clienteAxiosspotech';

interface Product {
    _id: string
    available: string
    category: string[]
    image: string[]
    name: string
    price: number
    seller: string[]
    apdatedAt: string
}

interface ListProducts {
    products: Product[]
}

const HomeSpotech = () => {

  SwiperCore.use([Autoplay]);

  const [ products, setProducts ] = useState<ListProducts['products']>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await clienteAxios('/product')
      const populares = [ data[0], data[1], data[2], data[3], data[4], data[5] ]
      setProducts(populares)
    }
    getProducts()
  }, [])

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
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner1.png' width={698} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner1.png' width={698} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner1.png' width={698} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-4 px-4'>
        <div className='flex items-center justify-between'>
          <h2>Ofertas del Día</h2>
          <Link href='/ListResults' className='flex items-center gap-2 text-sky-400'>
            <p className='text-xs'>Ver todo</p>
            <FaArrowRight className='w-3' />
          </Link>
        </div>
        <div className='mt-2'>
          <Swiper
            centeredSlides={false}
            slidesPerView={2.78}
            spaceBetween={15}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Link href='/ListResults'>
                <Image className='mx-auto rounded-lg cursor-pointer' src='/Ofertas1.png' width={272} height={138} alt='Oferta del día' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/ListResults'>
                <Image className='mx-auto rounded-lg cursor-pointer' src='/Ofertas2.png' width={272} height={138} alt='Oferta del día' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/ListResults'>
                <Image className='mx-auto rounded-lg cursor-pointer' src='/Ofertas3.png' width={272} height={138} alt='Oferta del día' />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href='/ListResults'>
                <Image className='mx-auto rounded-lg cursor-pointer' src='/Ofertas1.png' width={272} height={138} alt='Oferta del día' />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='px-4 mt-5 mb-10'>
        <h2 className='mb-1 text-2xl'>Popular</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2'>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeSpotech
