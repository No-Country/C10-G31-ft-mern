import Header from "@/components/shared/Headerspotech"
import Link from 'next/link'
import Image from 'next/image';
import { FaRegHeart, FaHeart, FaCheckCircle } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdAccountBalanceWallet, MdShare } from 'react-icons/md';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import clienteAxios from "../../config/clienteAxios";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addFavorite, getFavorites } from "../../features/favorites/favoritesSlice"
import { addCart, getCart } from "../../features/cart/cartSlice";
import { Product, Category } from '../../types/products'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {

  const [ cantidad, setCantidad ] = useState(1)
  const [ product, setProduct ] = useState<Product | null>(null)
  const [ products, setProducts ] = useState<Product[]>([])
  const [ category, setCategory ] = useState<Category | null>(null)
  const [ imageSelected, setImageSelected ] = useState('')

  const favorites = useAppSelector((state) => state.favorites.favs)
  const cart = useAppSelector((state) => state.cart.cart)

  const router = useRouter()
  const { id } = router.query
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFavorites(''))
    dispatch(getCart(''))
  }, [dispatch])

  useEffect(() => {
    if(id) {
      const getProduct = async () => {
        const { data: dataProduct } = await clienteAxios(`/product/${id}`)
        setProduct(dataProduct)
        setImageSelected(dataProduct.image[0])
        const { data: dataCategory } = await clienteAxios(`/category/${dataProduct.category[0]._id}`)
        setCategory(dataCategory)

        let productsFromCategory = []
        for(let i = 0; i < dataCategory.products.length; i++) {
          if(dataCategory.products[i]._id === product?._id) return
          const { data: productCategory } = await clienteAxios(`/product/${dataCategory.products[i]._id}`)
          productsFromCategory.push(productCategory)
        }
        setProducts(productsFromCategory)
      }
      getProduct()
    }
  }, [id, product?._id])

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

  const addCartProduct = (product: Product) => {
    const productWithAmount = {...product, amount: cantidad, selected: false}
    dispatch(addCart(productWithAmount))
    toast.success("Producto Agregado al carrito de compras!", {
      position: 'top-right',
      className: 'max-w-[450px]',
      icon: <FaCheckCircle className="w-6 h-6 text-[#3681F0]" />,
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: false,
      progressStyle: {background: "#3681F0"}
    })
  }

  const addFav = (product: Product) => {
    dispatch(addFavorite(product))
  }

  const share = (id: string) => {
    // TODO Pasar a variable de entorno
    navigator.clipboard.writeText(`http://localhost:3000/ProductDetail/${id}`)
        .then(() => {
          toast.success("Enlace del producto copiado correctamente!", {
            position: 'top-right',
            className: 'max-w-[450px]',
            autoClose: 1500,
            closeOnClick: true,
            pauseOnHover: false
          })
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
          <ToastContainer />
          <div className='px-5 mb-4 mt-28 md:mt-20'>
            <div className='flex items-center gap-1 text-xs font-bold lg:pl-24'>
              <Link href='/' >HOME</Link>
              <FiChevronRight />
              <Link href='/ListResults'>{product.category[0].name}</Link>
            </div>
            <p className='text-md mt-2 font-bold md:hidden'>{product.name}</p>
          </div>
          <div className="lg:w-2/3 lg:mx-auto">
            <div className="md:flex md:flex-row md:gap-8 md:p-9"> {/* Información Producto */}
              <div className="hidden md:flex md:flex-col md:gap-3">
                {product.image.length && product.image.map(image => (
                  <Image key={image} className="mx-auto border border-gray-400 rounded-md min-w-[42px] h-[46px] cursor-pointer" src={image} width={42} height={46} alt={`Imagen producto ${product.name}`} onClick={() => setImageSelected(image)} />
                ))}
              </div>
              <div className="hidden md:block">
                <Image className="mx-auto" src={imageSelected} width={356} height={386} alt={`Imagen producto ${product.name}`} />
              </div>
              <div className="md:hidden">
                <Swiper
                  centeredSlides={false}
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{ clickable: true }}
                >
                  {product.image.length && product.image.map(image => (
                    <SwiperSlide key={image} >
                      <Image className="max-h-[448px] mx-auto" src={image} width={412} height={448} alt={`Imagen producto ${product.name}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='md:flex md:flex-col md:border md:border-gray-400 md:rounded-lg md:m-0 md:px-3 md:py-2 mt-4 px-5'>
                <div className="hidden md:flex md:justify-between">
                  <p className='text-md mt-2 md:m-0 font-bold'>{product.name}</p>
                  {favorites.length && favorites.some(fav => fav._id === product._id) ? (
                    <FaHeart className="w-5 h-5 cursor-pointer text-[#3681F0]" onClick={() => addFav(product)} />
                  ) : (
                    <FaRegHeart className='w-5 h-5 cursor-pointer text-[#3681F0]' onClick={() => addFav(product)} />
                  )}
                </div>
                <p className='font-bold text-3xl md:mt-4'>${product.price}</p>
                <div className='flex md:flex-col justify-between text-xs mt-3 md:mt-0'>
                  <div>
                    <p className="mb-1"><span className="text-[#F0604D] font-bold">12</span> cuotas de <span className="text-[#50C21F] font-bold">${(product.price/12).toFixed(2)}</span></p>
                    <Link className="mt-1 text-[#3681F0] md:hidden" href='/PaymentMethod'>Ver medios de pago</Link>
                  </div>
                  <div className='hidden md:block mt-4'>
                    <p className='font-extrabold text-[18px]'>Variaciones:</p>
                    <select name="select" className='border rounded-lg mt-3 py-2 px-3 w-96 md:w-[213px]'>
                      {product.variations.length > 0 ? product.variations.map(variation => (
                        <option key={variation} value={variation}>{variation}</option>
                      )) : (
                        <option value="" disabled>No hay variantes para este producto</option>
                      )}
                    </select>
                  </div>
                  <div className="md:flex md:items-center md:gap-7 md:mt-5">
                    <p className='font-bold md:mt-1 text-[14px]'>Cantidad</p>
                    <div className='flex justify-between items-center mt-1 md:gap-3'>
                      <AiOutlineMinusSquare className='w-6 h-6 rounded-xl cursor-pointer text-[#3681F0]' onClick={substract} />
                      <p className="font-extrabold text-[#50C21F]">{cantidad}</p>
                      <AiOutlinePlusSquare className='w-6 h-6 rounded-xl cursor-pointer text-[#3681F0]' onClick={sum} />
                    </div>
                  </div>
                </div>
                <div className='md:hidden mt-4'>
                  <p className='font-bold'>Variaciones:</p>
                  <select name="select" className='border rounded-lg mt-3 py-2 px-3 w-96'>
                    {product.variations.length > 0 ? product.variations.map(variation => (
                      <option key={variation} value={variation}>{variation}</option>
                    )) : (
                      <option value="" disabled>No hay variantes para este producto</option>
                    )}
                  </select>
                </div>
                <div className='flex gap-4 md:flex-col md:gap-2 items-center justify-between sm:justify-evenly text-xs mt-8 md:mt-5'>
                  <div 
                    className='flex bg-[#3681F0] p-2 items-center justify-center text-white gap-2 rounded-lg cursor-pointer md:w-[213px] md:h-[40px]'
                    onClick={() => addCartProduct(product)}
                  >
                    <HiOutlineShoppingCart className='w-5 h-5' />
                    <p>Añadir al carrito</p>
                  </div>
                  <Link href={'/ShoppingCart'}>
                    <div className='flex bg-[#50C21F] p-2 items-center justify-center text-white gap-2 rounded-lg md:w-[213px] md:h-[40px]'>
                      <MdAccountBalanceWallet className='w-5 h-5' />
                      <p>Comprar Ahora</p>
                    </div>
                  </Link>
                  <div className='flex gap-4 justify-between md:hidden'>
                    {favorites.length && favorites.some(fav => fav._id === product._id) ? (
                      <FaHeart className="w-5 h-5 cursor-pointer text-[#3681F0]" onClick={() => addFav(product)} />
                    ) : (
                      <FaRegHeart className='w-5 h-5 cursor-pointer text-[#3681F0]' onClick={() => addFav(product)} />
                    )}
                    <MdShare className='w-5 h-5 cursor-pointer text-[#50C21F]' onClick={() => share(product._id)} />
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-4 border-t mt-9'>
              <h2 className='font-extrabold text-md mt-4 mb-3'>Descripción</h2>
              <p className='text-xs'>{product.description}</p>
            </div>
            <div className='border-t mx-4 mt-10 mb-20'>
              <h2 className='font-extrabold text-md mt-4'>Productos relacionados</h2>
              <div className="mt-4">
                <Swiper
                  centeredSlides={false}
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                >
                  {products.length > 0 ? products.map(product => (
                    <SwiperSlide key={product._id}>
                      <Link className="inline-block" href={`/ProductDetail/${product._id}`}>
                        <Image src={product.image[0]} width={163} height={240} alt='producto' />
                      </Link>
                    </SwiperSlide>
                  )) : (
                    <p>No hay más productos en esta categoría</p>
                  )}
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