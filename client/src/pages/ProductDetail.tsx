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
      <div className='px-5 my-4'>
        <div className='flex items-center gap-1 text-xs font-bold'>
          <Link href='/' >HOME</Link>
          <FiChevronRight />
          <Link href=''>Categoría</Link>
          <FiChevronRight />
          <Link href=''>Sub 1</Link>
          <FiChevronRight />
          <Link href=''>Sub 2</Link>
        </div>
        <p className='text-md mt-2 font-bold'>Producto Específico con sus características intrínsecas a su línea y modelo</p>
      </div>
      <div>
        <Image className="mx-auto" src='/prueba3.jpg' width={480} height={480} alt='producto' />
      </div>
      <div className='mt-4 px-5'>
        <p className='font-bold text-3xl'>$28505,28</p>
        <div className='flex justify-between text-xs mt-3'>
          <div>
            <p><span>12</span> cuotas de <span>$3034,23</span></p>
            <Link className="mt-1" href=''>Ver medios de pago</Link>
          </div>
          <div>
            <p className='font-bold'>Cantidad</p>
            <div className='flex justify-between mt-1'>
              <FaMinusSquare className='text-white bg-black rounded-xs' />
              <p>1</p>
              <FaPlusSquare className='text-white bg-black rounded-xs' />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <p className='font-bold'>Capacidad:</p>
          <input type='number' value='' className='border rounded mt-2 py-2 px-24' />
        </div>
        <div className='flex items-center justify-between text-xs mt-8'>
          <div className='flex bg-black p-2 px-6 items-center text-white gap-2 rounded-lg'>
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
      <div className='mx-4 border-t mt-9'>
        <h2 className='font-extrabold text-md mt-4 mb-3'>Descripción</h2>
        <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sed voluptatum praesentium ipsum quidem aspernatur obcaecati minima molestiae omnis, harum corrupti blanditiis iusto nulla aperiam quas unde voluptatem nisi doloremque. Laspernatur obcaecati minima molestiae omnis, harum corrupti blanditiis iusto nulla aperiam quas unde voluptatem nisi doloremque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sed voluptatum praesentium ipsum quidem aspernatur obcaecati minima molestiae omnis, harum corrupti blanditiis iusto nulla aperiam quas unde voluptatem nisi doloremque. Laspernatur obcaecati minima molestiae omnis, harum corrupti blanditiis iusto nulla aperiam quas unde voluptatem nisi doloremque.</p>
      </div>
      <div className='border-t mx-4 mt-10 mb-20'>
        <h2 className='font-extrabold text-md mt-4'>Productos relacionados</h2>
        <div className="mt-4">
          <Swiper
            centeredSlides={false}
            slidesPerView={2.7}
            spaceBetween={10}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image src='/prueba4.jpg' width={163} height={240} alt='producto' />
            </SwiperSlide>
            <SwiperSlide>
            <Image src='/prueba4.jpg' width={163} height={240} alt='producto' />
            </SwiperSlide>
            <SwiperSlide>
            <Image src='/prueba4.jpg' width={163} height={240} alt='producto' />
            </SwiperSlide>
            <SwiperSlide>
            <Image src='/prueba4.jpg' width={163} height={240} alt='producto' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductDetail