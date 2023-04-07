import { AiOutlineHistory } from 'react-icons/ai';
import { MdClose, MdOutlineKeyboardBackspace, MdOutlineArrowOutward } from 'react-icons/md';


interface SearchProps {
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const Search = ({searchActive, setSearchActive}: SearchProps) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      console.log('Presionaste enter')
    }
  }


  return (
    <div className='bg-white fixed top-0 left-0 z-10 w-full min-h-screen'>
      <div className='my-1'>
        <div className='flex justify-between items-center border-b shadow-md'>
          <div className='flex gap-3 items-center py-1 px-6'>
              <MdOutlineKeyboardBackspace className='w-6 h-6 cursor-pointer' onClick={() => setSearchActive(!searchActive)} />
              <input 
                className='placeholder:text-gray-400 outline-none text-sm font-bold' 
                placeholder='Motora G6 Plus' 
                type='text' 
                onKeyDown={handleKeyDown}
              />
          </div>
          <MdClose className='w-6 h-6 mr-6' />
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
    </div>
  )
}

export default Search