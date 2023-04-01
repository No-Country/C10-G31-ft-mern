import Header from "@/components/shared/Headerspotech"
import Link from 'next/link'
import Image from 'next/image';
import { FaPlusSquare, FaMinusSquare, FaRegHeart } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdAccountBalanceWallet, MdShare } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ProductDetail = () => {
  return (
    <>
      <Header />
      <div className='p-2 space-y-2'>
        <div className='flex items-center gap-1 text-xs'>
          <Link href='/' >HOME</Link>
          <FiChevronRight />
          <Link href=''>Categoría</Link>
          <FiChevronRight />
          <Link href=''>Sub 1</Link>
          <FiChevronRight />
          <Link href=''>Sub 2</Link>
        </div>
        <p className='text-xs'>Producto Específico con sus características intrínsecas a su línea y modelo</p>
      </div>
      <div className='bg-gray-400'>
        <Image src='/' width={380} height={380} alt='producto' />
      </div>
      <div className='mt-2 p-4'>
        <p className='font-bold'>$28505,28</p>
        <div className='flex justify-between text-xs my-2'>
          <div>
            <p><span>12</span> cuotas de <span>$3034,23</span></p>
            <Link href=''>Ver medios de pago</Link>
          </div>
          <div className='space-y-1'>
            <p className='font-bold'>Cantidad</p>
            <div className='flex justify-between'>
              <FaMinusSquare className='text-white bg-black rounded-xs' />
              <p>1</p>
              <FaPlusSquare className='text-white bg-black rounded-xs' />
            </div>
          </div>
        </div>
        <div className='mb-6 space-y-1'>
          <p className='font-bold'>Capacidad:</p>
          <input type='number' value='' className='border rounded' />
        </div>
        <div className='flex items-center justify-between text-xs mb-4'>
          <div className='flex bg-black p-2 px-6 items-center text-white gap-2 rounded'>
            <HiOutlineShoppingCart className='w-5 h-5' />
            <p>Añadir al carrito</p>
          </div>
          <div className='flex bg-gray-500 p-2 px-6 items-center text-white gap-2 rounded'>
            <MdAccountBalanceWallet className='w-5 h-5 bg-white rounded text-gray-500' />
            <p>Comprar Ahora</p>
          </div>
          <div className='flex gap-2'>
            <FaRegHeart className='w-5 h-5' />
            <MdShare className='w-5 h-5' />
          </div>
        </div>
      </div>
      <div className='p-4 border-t mb-4'>
        <h2 className='font-bold text-xs mb-3'>Descripción</h2>
        <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sed voluptatum praesentium ipsum quidem aspernatur obcaecati minima molestiae omnis, harum corrupti blanditiis iusto nulla aperiam quas unde voluptatem nisi doloremque.</p>
      </div>
      <div className='p-4 border-t mb-6'>
        <h2 className='font-bold text-xs mb-3'>Productos relacionados</h2>
        <div>
          <Swiper
            centeredSlides={false}
            slidesPerView={2.8}
            spaceBetween={0}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='bg-gray-800 rounded-md w-36 h-48 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-600 rounded-md w-36 h-48 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-400 rounded-md w-36 h-48 mx-auto'></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-gray-800 rounded-md w-36 h-48 mx-auto'></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductDetail