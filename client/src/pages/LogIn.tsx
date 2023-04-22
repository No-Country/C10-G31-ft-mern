import { useState } from "react"
import Link from "next/link"
import Alert from '../components/Alert'
import Image from "next/image"
import Logo from '../../public/Logo Login.png'
import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { login } from "../features/auth/authSlice"
import { setAlert } from "../features/alert/alertSlice"
import clienteAxios from "@/config/clienteAxiosspotech"

const LogIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const alert = useAppSelector((state) => state.alert)

    const dispatch = useAppDispatch()
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if([email, password].includes('')) {
        dispatch(setAlert({
          msg: 'Todos los campos son requeridos',
          error: true
        }))
        setTimeout(() => {
          dispatch(setAlert({msg: '', error: false}))
        }, 3000);
        return
      }

      try {
        const response = await clienteAxios.post('/user/login', { email, password })
        const data = response.data
        dispatch(login({ token: data.token, id: data.id }))
        setTimeout(() => {
          dispatch(setAlert({msg: '', error: false}))
        }, 3000);
        setEmail('')
        setPassword('')
        router.push('/')
      } catch (error: any) {
        if(error.response.data.errors) {
          dispatch(setAlert({msg: error.response.data.errors[0].message, error: true}))
          return
        }
        if(error.response.data.message) {
          dispatch(setAlert({msg: error.response.data.message, error: true}))
          return
        }
      }
    }

    const { msg } = alert

  return (
    <div className="px-4 w-full md:w-3/4 lg:w-5/6 lg:flex md:m-auto h-full md:mt-14">
        <div className="pt-7 pl-3">
            <FaArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        </div>
        <div className="lg:flex lg:flex-row lg:gap-16 lg:items-center lg:justify-evenly lg:mx-auto lg:container lg:mb-20">
            <div className="mt-28 lg:mt-20 lg:space-y-10">
                <Link href='/'>
                  <Image className="mx-auto" src={Logo} alt="Logo" />
                </Link>
                <div className="w-full hidden text-center mb-10 lg:inline-block">
                    <p>
                        ¿No tienes una cuenta? 
                        <Link href={'/SignIn'}>
                          <span className="text-[#3681F0]"> Registrate</span>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="lg:w-[448px]">
                <form 
                    className="flex flex-col mt-36 md:gap-y-3"
                    onSubmit={handleSubmit}
                >
                {msg && <Alert alert={alert} />}
                <div className="flex flex-col gap-x-4 gap-y-2">
                    <label className="font-bold text-xs md:text-xl" htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id='email'
                        className="border-2 border-gray-400 rounded-lg p-2 md:p-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <label className="font-bold text-xs md:text-xl" htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id='password'
                        className="border-2 border-gray-400 rounded-lg p-2 md:p-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Link className="mt-4 lg:mt-2" href='/'>
                    <p className="text-blue-700 text-xs md:text-lg">Recuperar contraseña</p>
                </Link>
                <div className="flex mt-8 lg:mt-2">
                    <input 
                        type="submit" 
                        value='Iniciar Sesión'
                        className="bg-[#3681F0] px-4 py-5 rounded-lg w-full text-white font-bold text-xl md:inline-block md:w-full md:px-4 md:py-4 cursor-pointer mb-8"
                    />
                </div>
                </form>
                <div className="w-full text-center mb-10 lg:hidden">
                    <p>
                        ¿No tienes una cuenta? 
                        <Link href={'/SignIn'}>
                        <span className="text-[#3681F0]"> Registrate</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn