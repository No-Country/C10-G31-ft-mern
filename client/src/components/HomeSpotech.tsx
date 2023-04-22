import Image from 'next/image';
import Link from 'next/link';
import Header from './shared/Header';
import { FaArrowRight } from 'react-icons/fa'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react'
import clienteAxios from '@/config/clienteAxiosspotech';
import Oferta from './Oferta';
import { Product } from '@/types/productsspotech';


const HomeSpotech = () => {

  SwiperCore.use([Autoplay]);

  const [ offers, setOffers ] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data: offers } = await clienteAxios('/category/64434cea0fe12d9933f622df')
      let offersCategory: Product[] = []
      for(let i = 0; i < offers.products.length; i++) {
          const { data: product } = await clienteAxios(`/product/${offers.products[i]?._id}`)
          offersCategory.push(product)
      }
      setOffers(offersCategory)
    }
    getProducts()
  }, [])

  return (
    <>
      <Header />
      <div className='z-0 mt-28 md:mt-20 px-4'>
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner1.png' width={926} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner2.png' width={926} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/ListResults'>
              <Image className='mx-auto rounded-lg cursor-pointer' src='/Banner3.png' width={926} height={297} alt='Ofertas' />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='mt-4 px-4'>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold'>Ofertas del Día</h2>
          <Link href='/CategoryResults/64434cea0fe12d9933f622df' className='flex items-center gap-2 text-sky-400'>
            <p className='text-xs'>Ver todo</p>
            <FaArrowRight className='w-3' />
          </Link>
        </div>
        <div className='my-2'>
          <Swiper
            centeredSlides={false}
            slidesPerView={5}
            spaceBetween={10}
            pagination={{ clickable: true }}
          >
            {offers.length && offers.map((offer: Product) => (
              <SwiperSlide key={offer._id}>
                <Oferta offer={offer}  />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='px-4 mt-5 mb-10'>
        <h2 className='mb-1 text-2xl'>Popular</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-2'>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares2.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares3.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares4.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares5.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares6.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares1.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares2.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares3.png' width={234} height={168} alt='Oferta del día' />
          </Link>
          <Link href={`/ListResults`}>
            <Image className='mx-auto rounded-lg cursor-pointer' src='/Populares4.png' width={234} height={168} alt='Oferta del día' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeSpotech
