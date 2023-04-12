import Header from "@/components/shared/Headerspotech"
import Link from 'next/link'
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdAccountBalanceWallet, MdShare } from 'react-icons/md';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import clienteAxios from "@/config/clienteAxiosspotech";


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
  favs: Product[]
}

const ProductDetail = () => {

  const [ cantidad, setCantidad ] = useState(1)
  const [ product, setProduct ] = useState<Product | null>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if(id) {
      const getProduct = async () => {
        const { data } = await clienteAxios(`/products/${id}`)
        setProduct(data)
      }
      getProduct()
    }
  }, [id])

  const substract = () => {
    if(cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const sum = () => {
    if(cantidad < 5) {
      setCantidad(cantidad + 1)
    }
  }

  const addCart = () => {
    const cartRaw = localStorage.getItem('cart')
    const cart: ListProducts['favs'] = cartRaw && cartRaw.length > 0 ? JSON.parse(cartRaw) : []
    
    const existe = cart.filter(car => car._id === product?._id)

    if(existe[0]?._id === product?._id) {
      const filtercart = cart.map(car => car._id === product?._id ? {...product, amount: cantidad } : car)
      localStorage.setItem('cart', JSON.stringify(filtercart))
    } else {
      const newcart = [...cart, {...product, amount: cantidad}]
      localStorage.setItem('cart', JSON.stringify(newcart))
    }
  }

  const addFav = () => {
    const favsRaw = localStorage.getItem('favs')
    const favs: ListProducts['favs'] = favsRaw && favsRaw.length > 0 ? JSON.parse(favsRaw) : []
    
    const existe = favs.filter(fav => fav._id === product?._id)

    if(existe[0]?._id === product?._id) {
      const filterFavs = favs.filter(fav => fav._id !== product?._id)
      localStorage.setItem('favs', JSON.stringify(filterFavs))
    } else {
      const newFavs = [...favs, product]
      localStorage.setItem('favs', JSON.stringify(newFavs))
    }
  }

  const share = (id: string) => {
    // TODO Pasar a variable de entorno
    navigator.clipboard.writeText(`http://localhost:3000/ProductDetail/${id}`)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar al portapapeles: ', error);
        });
  }

  return (
    <>
      <Header />
      {product?._id && (
        <>
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
            <p className='text-md mt-2 font-bold'>{product.name}</p>
          </div>
          <div>
            <div>
              <Swiper
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ clickable: true }}
              >
                {product.image.length && product.image.map(image => (
                  <SwiperSlide key={image} >
                    <Image className="max-h-[480px]" src={image} width={480} height={480} alt={`Imagen producto ${product.name}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='mt-4 px-5'>
              <p className='font-bold text-3xl'>${product.price}</p>
              <div className='flex justify-between text-xs mt-3'>
                <div>
                  <p><span>12</span> cuotas de <span>${(product.price/12).toFixed(2)}</span></p>
                  <Link className="mt-1" href='/PaymentMethod'>Ver medios de pago</Link>
                </div>
                <div>
                  <p className='font-bold'>Cantidad</p>
                  <div className='flex justify-between items-center mt-1'>
                    <AiOutlineMinusSquare className='w-5 h-5 rounded-xl cursor-pointer' onClick={substract} />
                    <p className="font-bold">{cantidad}</p>
                    <AiOutlinePlusSquare className='w-5 h-5 rounded-xl cursor-pointer' onClick={sum} />
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <p className='font-bold'>Capacidad: {product.available}</p>
                <input type='number' className='border rounded-lg mt-2 py-2 px-3 w-96' />
              </div>
              <div className='flex items-center justify-between text-xs mt-8 gap-[0.7px]'>
                <div 
                  className='flex bg-black p-2 px-6 items-center text-white gap-2 rounded-lg cursor-pointer'
                  onClick={addCart}
                >
                  <HiOutlineShoppingCart className='w-5 h-5' />
                  <p>Añadir al carrito</p>
                </div>
                <Link href={'/PaymentMethod'}>
                  <div className='flex bg-gray-500 p-2 px-6 items-center text-white gap-2 rounded'>
                    <MdAccountBalanceWallet className='w-5 h-5 bg-white rounded-lg text-gray-500' />
                    <p>Comprar Ahora</p>
                  </div>
                </Link>
                <div className='flex gap-2'>
                  <FaRegHeart className='w-5 h-5 cursor-pointer' onClick={addFav} />
                  <MdShare className='w-5 h-5 cursor-pointer' onClick={() => share(product._id)} />
                </div>
              </div>
            </div>
            <div className='mx-4 border-t mt-9'>
              <h2 className='font-extrabold text-md mt-4 mb-3'>Descripción</h2>
              {/* TODO agregar descripción dinámica */}
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
          </div>
        </>
      )}
    </>
  )
}

export default ProductDetail