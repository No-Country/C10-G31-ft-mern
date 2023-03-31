import { FaBars, FaRegHeart, FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Header = () => {
  return (
    <header className='bg-gray-400 p-2 flex flex-col gap-1'>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-white'>
          <h1>Logo</h1>
        </div>
        <div className='flex gap-2 text-white'>
          <FaRegUserCircle />
          <FaRegHeart />
          <HiOutlineShoppingCart />
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        <div className='flex-none bg-white rounded-md p-0.5'>
          <FaBars />
        </div>
        <div className='flex-1 flex-grow'>
          <input className='rounded-md w-full px-2' type="text" placeholder='Buscar...' />
        </div>
      </div>
    </header>
  )
}

export default Header
