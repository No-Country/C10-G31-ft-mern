import { AiOutlineHistory } from 'react-icons/ai';
import { MdClose, MdOutlineKeyboardBackspace, MdOutlineArrowOutward } from 'react-icons/md';
import { useRouter } from 'next/router'
import { useState } from 'react';

interface SearchProps {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const Search = ({searchActive, setSearchActive}: SearchProps) => {

  const [ textSearch, setTextSearch ] = useState('')
  const router = useRouter()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(textSearch === '') {
      return
    }
    if(e.key === 'Enter') {
      return router.push('/ListResults')
    }
  }

  return (
    <div className='my-1'>
      <div className='flex justify-between items-center border-b shadow-md'>
        <div className='flex w-full gap-3 items-center py-1 px-6'>
            <MdOutlineKeyboardBackspace className='w-6 h-6 cursor-pointer' onClick={() => setSearchActive(!searchActive)} />
            <input 
              className='placeholder:text-gray-400 flex-1 outline-none text-sm font-bold' 
              placeholder='Motora G6 Plus' 
              type='text' 
              value={textSearch}
              onChange={e => setTextSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
        </div>
        <MdClose className='w-6 h-6 mr-6 cursor-pointer' onClick={() => setSearchActive(!searchActive)} />
      </div>
      <div className='space-y-2 my-2 px-6'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <AiOutlineHistory className='w-5 h-5 transform -scale-x-100' />
                <p className='font-bold text-sm'>MSI Katana</p>
            </div>
            <MdOutlineArrowOutward className='w-6 h-6 -rotate-90' />
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <AiOutlineHistory className='w-5 h-5 transform -scale-x-100' />
                <p className='font-bold text-sm'>Lenovo Thinkpad L15 2° Gen</p>
            </div>
            <MdOutlineArrowOutward className='w-6 h-6 -rotate-90' />
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <AiOutlineHistory className='w-5 h-5 transform -scale-x-100' />
                <p className='font-bold text-sm'>Cargador Universal Notebook</p>
            </div>
            <MdOutlineArrowOutward className='w-6 h-6 -rotate-90' />
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <AiOutlineHistory className='w-5 h-5 transform -scale-x-100' />
                <p className='font-bold text-sm'>SSD M.2 Firecuda</p>
            </div>
            <MdOutlineArrowOutward className='w-6 h-6 -rotate-90' />
        </div>
      </div>
    </div>
  )
}

export default Search
