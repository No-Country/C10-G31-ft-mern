import { TbMailFast } from 'react-icons/tb'

const CheckEmail = () => {
    return(
        <div className='p-3'>
            <p className='w-full my-16 text-center'>Verifica tu correo</p>
            <div className='w-full text-center'>
                <TbMailFast className='text-5xl m-auto mb-2' />
                <div className='w-full'>
                    <p className='w-full text-sm'>Te enviamos un <span className='font-bold'>codigo de confirmacion</span> a <span className='font-bold'>unknowplayer@gmail.com</span></p>
                    <p className='text-sm'>Ingresalo a continuacion</p>
                </div>
                <div>
                    <input className='m-auto border border-gray-500 grid mt-2' type='text' />
                </div>
            </div>
            <button className='w-full p-3 rounded-lg mt-16 text-white text-lg bg-[#333]'>Continuar</button>
        </div>
    )
}

export default CheckEmail
