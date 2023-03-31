import { FaArrowLeft, FaTimes, FaHistory, FaArrowUp } from 'react-icons/fa'

const Busqueda = () => {
  return (
    <div className='my-1'>
      <div className='flex justify-between items-center border-b-2'>
        <div className='flex gap-3 items-center ml-3'>
            <FaArrowLeft />
            <input className='placeholder:text-gray-800' placeholder='Motora G6 Plus' type="text" />
        </div>
        <FaTimes className='mr-3' />
      </div>
      <div className='space-y-2 my-2'>
        <div className='flex justify-between items-center mx-3'>
            <div className='flex gap-3 items-center'>
                <FaHistory />
                <p>NoteBook Lenovo 14"</p>
            </div>
            <FaArrowUp className='-rotate-45' />
        </div>
        <div className='flex justify-between items-center mx-3'>
            <div className='flex gap-3 items-center'>
                <FaHistory />
                <p>NoteBook Lenovo 14"</p>
            </div>
            <FaArrowUp className='-rotate-45' />
        </div>
        <div className='flex justify-between items-center mx-3'>
            <div className='flex gap-3 items-center'>
                <FaHistory />
                <p>NoteBook Lenovo 14"</p>
            </div>
            <FaArrowUp className='-rotate-45' />
        </div>
      </div>
    </div>
  )
}

export default Busqueda
