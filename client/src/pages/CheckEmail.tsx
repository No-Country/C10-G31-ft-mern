import { TbMailFast } from 'react-icons/tb'
import Link from 'next/link'

const CheckEmail = () => {
    return(
        <div className='p-3 md:w-3/4 md:m-auto md:my-4'>
            <p className='w-full my-16 text-center md:text-lg'>Verifica tu correo</p>
            <div className='w-full mb-20 text-center'>
                <TbMailFast className='text-5xl m-auto mb-2' />
                <div className='w-full'>
                    <p className='w-full text-sm md:text-xl'>Te enviamos un <span className='font-bold text-[green]'>codigo de confirmacion</span> a <span className='font-bold text-[green]'>unknowplayer@gmail.com</span></p>
                    <p className='text-sm md:mb-6'>Ingresalo a continuacion</p>
                </div>
                <div>
                    <input className='m-auto border border-gray-500 grid mt-2' type='text' />
                </div>
            </div>
            <Link href={""} className='w-full block p-3 rounded-lg mt-16 text-center text-white text-lg bg-[#3681F0] md:w-3/5 md:m-auto md:block md:mb-6 md:p-4 md:text-lg'>Continuar</Link>
            <button className='w-full mt-5 p-3 border-2 border-green-600 rounded-lg text-black text-lg md:w-3/5 md:m-auto md:block md:p-4 md:text-lg'>Volver a enviar</button>
        </div>
    )
}

export default CheckEmail
