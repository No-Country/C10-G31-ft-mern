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
    <div className={`fixed top-0 left-0 mt-[92px] md:mt-16 lg:left-28 -z-10 w-full opacity-0 transition duration-500 ${menuActive ? 'opacity-100 z-40' : ''}`} >
        <div className='flex min-h-screen'>
            <div className='min-w-[240px] lg:border lg:border-sky-400 bg-white min-h-screen h-full overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-400'>
                <div id='menuBurguer' className="flex flex-col gap-6 py-3">
                    <div className={`${categoriesActive ? 'bg-gray-200' : ''} flex flex-col gap-6 pb-3 transition duration-500 ease-in-out`}> {/* Inicio Categorias */}
                        <div className='flex items-center gap-2 cursor-pointer px-4 mt-3 -mb-3 pb-3' onClick={() => setCategoriesActive(!categoriesActive)}>
                            <BsGrid className='text-[#3681F0] border border-[#3681F0] rounded-sm w-6 h-6' />
                            <p className='text-[#3681F0]'>Categorías</p>
                        </div>
                        <div className={`${categoriesActive ? 'flex flex-col' : 'hidden'} gap-6`}>
                            <div className={`${smartphonesActive ? 'bg-gray-300 py-3 -mt-3' : ''} flex flex-col gap-6 px-4`}> {/* Comienzo Categoria Smartphone */}
                                <div className='flex items-center gap-2 cursor-pointer mb-3' onClick={() => setSmartphonesActive(!smartphonesActive)}>
                                    <GiSmartphone className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Smartphones</p>
                                </div>
                                <div className={`${smartphonesActive ? 'flex flex-col -mt-3' : 'hidden'} gap-6`}>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/CategoryResults/64437619a02cdc8258a64a8d' className='flex items-center gap-2 cursor-pointer' >
                                            <MdAndroid className='text-[#50C21F] w-5 h-5' />
                                            <p className='text-[#3681F0]' >Android</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/CategoryResults/64437619a02cdc8258a64a8d' className='flex items-center gap-2 cursor-pointer' >
                                            <FaApple className='text-[#50C21F] w-6 h-6' />
                                            <p className='text-[#3681F0]' >iOS</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/CategoryResults/64437619a02cdc8258a64a8d' className='flex items-center gap-2 cursor-pointer' >
                                            <BsGrid className='text-[#50C21F] border border-[#50C21F] rounded-sm w-6 h-6' />
                                            <p className='text-[#3681F0]' >Otros</p>
                                        </Link>
                                    </div>
                                </div>
                            </div> {/* Fin Categoria Smartphone */}
                            <div className={`${tabletsActive ? 'bg-gray-300 pt-6 -mt-6' : ''} flex flex-col gap-6 px-4 pb-3`}> {/* Comienzo Categoria Tablets */}
                                <div className={`${smartphonesActive ? '-mt-3' : '-mt-3'} flex items-center gap-2 cursor-pointer`} onClick={() => setTabletsActive(!tabletsActive)}>
                                    <MdTabletAndroid className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Tablets</p>
                                </div>
                                <div className={`${tabletsActive ? 'flex flex-col' : 'hidden'} gap-6`}>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/CategoryResults/6441011d2e7ea62245a07479' className='flex items-center gap-2 cursor-pointer' >
                                            <FaApple className='text-[#50C21F] w-6 h-6' />
                                            <p className='text-[#3681F0]' >iPad</p>
                                        </Link>
                                    </div>
                                    <div className='flex items-center gap-2 cursor-pointer'>
                                        <Link href='/CategoryResults/6441011d2e7ea62245a07479' className='flex items-center gap-2 cursor-pointer' >
                                            <MdAndroid className='text-[#50C21F] w-5 h-5' />
                                            <p className='text-[#3681F0]' >Android</p>
                                        </Link>
                                    </div>
                                </div>
                            </div> {/* Fin Categoria Tablets */}
                            <div className='flex items-center gap-2 px-4 -mt-3 cursor-pointer'>
                                <Link href='/CategoryResults/644114a825df51d7880290d6' className='flex items-center gap-2 cursor-pointer' >
                                    <MdComputer className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Notebooks</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/ListResults' className='flex items-center gap-2 cursor-pointer' >
                                    <BsPc className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Desktop</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/CategoryResults/643f3edf649847f404c307fa' className='flex items-center gap-2 cursor-pointer' >
                                    <MdOutlineDesktopWindows className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Monitores</p>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2 px-4 cursor-pointer'>
                                <Link href='/CategoryResults/643627bc659dec8e2f6ba9dd' className='flex items-center gap-2 cursor-pointer' >
                                    <MdOutlineTv className='text-[#F0604D] w-5 h-5' />
                                    <p className='text-[#3681F0]' >Tv</p>
                                </Link>
                            </div>
                        </div>
                    </div> {/* Fin Categorias */}
                    <div className='flex items-center gap-2 px-4 -mt-3 cursor-pointer'>
                        <Link href='/CategoryResults/64434cea0fe12d9933f622df' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineTag className='text-[#F0604D] -rotate-90 w-6 h-6' />
                            <p className='text-[#3681F0]' >Ofertas</p>
                        </Link>
                    </div>
                    {/* <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineHistory className='text-[#F0604D] w-6 h-6 transform -scale-x-100' />
                            <p className='text-[#3681F0]' >Historial</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <BiPackage className='text-[#F0604D] w-6 h-6' />
                            <p className='text-[#3681F0]' >Compras</p>
                        </Link>
                    </div> */}
                    <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='/' className='flex items-center gap-2 cursor-pointer' >
                            <MdSupportAgent className='text-[#F0604D] w-6 h-6' />
                            <p className='text-[#3681F0]' >Contacto</p>
                        </Link>
                    </div>
                    <div className='flex items-center gap-2 px-4 cursor-pointer mb-20'>
                        <Link href='/' className='flex items-center gap-2 cursor-pointer' >
                            <AiOutlineQuestionCircle className='text-[#F0604D] w-6 h-6' />
                            <p className='text-[#3681F0]' >Ayuda</p>
                        </Link>
                    </div>
                    {/* <div className='flex items-center gap-2 px-4 cursor-pointer'>
                        <Link href='' className='flex items-center gap-2 cursor-pointer' >
                            <MdLogout className='text-[#F0604D] w-6 h-6' />
                            <p className='text-[#3681F0]' >Salir</p>
                        </Link>
                    </div> */}
                </div>
            </div>
            <div className={`flex-1 opacity-0`} onClick={() => setMenuActive(!menuActive)}></div>
        </div>
    </div>
  )
}

export default BurgerMenu
