import Alert from '../components/Alert'
import { useState } from "react"
import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { registerUser } from "../features/auth/authSlice"
import { setAlert } from "../features/alert/alertSlice"
import { useRouter } from 'next/router'
import Logo from '../../public/Logo.png'
import Image from 'next/image'

const SignIn = () => {

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const alert = useAppSelector((state) => state.alert)
    const router = useRouter();

    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([name, lastName, phone, email, password, repeatPassword].includes('')) {
            dispatch(setAlert({
                msg: 'Todos los campos son requeridos',
                error: true
            }))
            setTimeout(() => {
                dispatch(setAlert({msg: '', error: false}))
            }, 3000);
            return
        }
        if( password !== repeatPassword) {
            dispatch(setAlert({
                msg: 'Los Password no coinciden',
                error: true
            }))
            setTimeout(() => {
            setAlert({msg: '', error: false})
            }, 3000);
            return
        }

        dispatch(registerUser(name, lastName, phone, email, password))
        if(alert.error) {
            return
        } else {
            setName('')
            setLastName('')
            setPhone('')
            setEmail('')
            setPassword('')
            setRepeatPassword('')
            router.push('/LogIn')
        }
    }

    const { msg } = alert

  return (
    <>
        <div className='bg-[#3681F0] p-4 hidden lg:block'>
            <Link href='/'>
                <Image src={Logo} width={104} height={24} alt={'Logo'} />
            </Link>
        </div>
        <div className="px-4 mt-10 md:my-32 md:w-3/4 md:block md:m-auto lg:max-w-3xl">
            <h2 className="text-center md:text-xl">¡Bienvenido a Spotech!</h2>
            <form 
                className="flex flex-col gap-3 mt-16 md:gap-y-5"
                onSubmit={handleSubmit}
            >
                {msg && <Alert alert={alert} />}
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="name">Nombre/s</label>
                    <input 
                        type="text" 
                        id='name' 
                        className="border-2 border-gray-400  rounded-md p-1 md:p-2 md:border-gray-400"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="surname">Apellido/s</label>
                    <input 
                        type="text" 
                        id='surname' 
                        className="border-2 border-gray-400  rounded-md p-1 md:p-2 md:border-gray-400"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="phone">N° de teléfono</label>
                    <input 
                        type="text" 
                        id='phone'
                        className="border-2 border-gray-400 rounded-md p-1 md:p-2  md:border-gray-400"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id='email'
                        className="border-2 border-gray-400  rounded-md p-1 md:p-2 md:border-gray-400"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id='password'
                        className="border-2 border-gray-400  rounded-md p-1 md:p-2 md:border-gray-400"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="repeat-password">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id='repeat-password'
                        className="border-2 border-gray-400  rounded-md p-1 md:p-2 md:border-gray-400"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                </div>

                <div className="flex">
                    <input 
                        type="submit" 
                        value='Continuar' 
                        className="bg-[#3681F0] px-3 py-5 mb-6 rounded-lg mt-7 w-full text-white font-bold text-xl md:inline-block md:w-full md:px-12 md:text-2xl cursor-pointer"
                    />
                </div>
            </form>
            <div className="w-full text-center mb-10">
                <p>
                    ¿Ya tienes una cuenta? 
                    <Link href={'/LogIn'}>
                        <span className="text-[#3681F0]"> Ingresa</span>
                    </Link>
                </p>
            </div>
        </div>
    </>
  )
}

export default SignIn
