import { BsGrid, BsPc } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineTag, AiOutlineHistory, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiPackage } from 'react-icons/bi';
import { MdSupportAgent, MdLogout, MdTabletAndroid, MdComputer, MdOutlineDesktopWindows, MdOutlineTv, MdAndroid } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

interface BurgerMenuProps {
    menuActive: boolean;
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({menuActive, setMenuActive}: BurgerMenuProps) => {

    const [ categoriesActive, setCategoriesActive ] = useState(false)
    const [ smartphonesActive, setSmartphonesActive ] = useState(false)
    const [ tabletsActive, setTabletsActive ] = useState(false)

  return (
    <div className='fixed top-0 left-0 z-10 w-full' >
        <div className='flex min-h-screen'>
            <div className='min-w-[240px] bg-gray-500 pt-36 min-h-screen h-full overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-yellow-200 scrollbar-track-gray-400'>
                <div id='menuBurguer' className="flex flex-col gap-6 py-3">
                    <div className={`${categoriesActive ? 'bg-gray-400' : ''} flex flex-col gap-6 pb-3`}> {/* Inicio Categorias */}
                        <div className='flex items-center gap-2 cursor-pointer px-4 mt-3 -mb-3 pb-3' onClick={() => setCategoriesActive(!categoriesActive)}>
                            <BsGrid className='border border-gray-900 rounded-sm w-6 h-6' />
                            <p>Categorías</p>
                        </div>
                        <div className={`${categoriesActive ? 'flex flex-col' : 'hidden'} gap-6`}>
                            <div className={`${smartphonesActive ? 'bg-gray-300 py-3 -mt-3' : ''} flex flex-col gap-6 px-4`}> {/* Comienzo Categoria Smartphone */}
                                <div className='flex items-center gap-2 cursor-pointer mb-3' onClick={() => setSmartphonesActive(!smartphonesActive)}>
                                    <GiSmartphone className='w-5 h-5' />
                                    <p>Smartphones</p>
                                </div>
                                <div className={`${smartphonesActive ? 'flex flex-col -mt-3' : 'hidden'} gap-6`}>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                            <MdAndroid className='w-5 h-5' />
                                            <p>Android</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                            <FaApple className='w-6 h-6' />
                                            <p>iOS</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                            <BsGrid className='border border-gray-900 rounded-sm w-6 h-6' />
                                            <p>Others</p>
                                        </Link>
                                    </div>
                                </div>
                            </div> {/* Fin Categoria Smartphone */}
                            <div className={`${tabletsActive ? 'bg-gray-200 pt-6 -mt-6' : ''} flex flex-col gap-6 px-4 pb-3`}> {/* Comienzo Categoria Tablets */}
                                <div className={`${smartphonesActive ? '-mt-3' : '-mt-3'} flex items-center gap-2 cursor-pointer`} onClick={() => setTabletsActive(!tabletsActive)}>
                                    <MdTabletAndroid className='w-5 h-5' />
                                    <p>Tablets</p>
                                </div>
                                <div className={`${tabletsActive ? 'flex flex-col' : 'hidden'} gap-6`}>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                            <FaApple className='w-6 h-6' />
                                            <p>iPad</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                            <MdAndroid className='w-5 h-5' />
                                            <p>Android</p>
                                        </Link>
                                    </div>
                                </div>
                            </div> {/* Fin Categoria Tablets */}
                            <div className='flex items-center gap-2 px-4 -mt-3 cursor-pointer'>
                                <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                    <MdComputer className='w-5 h-5' />
                                    <p>Notebooks</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                    <BsPc className='w-5 h-5' />
                                    <p>Desktop</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                    <MdOutlineDesktopWindows className='w-5 h-5' />
                                    <p>Monitores</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                    <MdOutlineTv className='w-5 h-5' />
                                    <p>Tv</p>
                                </Link>
                            </div>
                        </div>
                    </div> {/* Fin Categorias */}
                    <div className='flex items-center gap-2 px-4 -mt-3 cursor-pointer'>
                        <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineTag className='-rotate-90 w-6 h-6' />
                            <p>Ofertas</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineHistory className='w-6 h-6 transform -scale-x-100' />
                            <p>Historial</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <BiPackage className='w-6 h-6' />
                            <p>Compras</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <MdSupportAgent className='w-6 h-6' />
                            <p>Contacto</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineQuestionCircle className='w-6 h-6' />
                            <p>Ayuda</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <MdLogout className='w-6 h-6' />
                            <p>Salir</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex-1 bg-gray-700 opacity-90' onClick={() => setMenuActive(!menuActive)}></div>
        </div>
    </div>
  )
}

export default BurgerMenu
