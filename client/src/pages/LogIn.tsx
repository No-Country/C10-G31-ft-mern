import { useState } from "react"
import Link from "next/link"
import Alert from '../components/Alert'
import Image from "next/image"
import Logo from '../../public/Logo Login.png'
import { FaArrowLeft } from 'react-icons/fa'

const LogIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ alert, setAlert ] = useState({msg: '', error: false})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([email, password].includes('')) {
            setAlert({
              msg: 'Todos los campos son requeridos',
              error: true
            })
            setTimeout(() => {
              setAlert({msg: '', error: false})
            }, 3000);
            return
        }

        // TODO enviar los datos al backend
        console.log(email, password)
    }

    const { msg } = alert

  return (
    <div className="px-4 w-full md:w-3/4 md:m-auto h-full md:mt-14">
      <div className="pt-7 pl-3">
        <FaArrowLeft />
      </div>      
      <div className="flex justify-center items-center mt-28">
          <Image src={Logo} alt="Logo" />
      </div>
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
                className="border-2 border-gray-400 rounded-md p-2 md:p-3"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label className="font-bold text-xs md:text-xl" htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                id='password'
                className="border-2 border-gray-400 rounded-md p-2 md:p-3"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <Link className="mt-4" href='/'>
          <p className="text-blue-700 text-xs md:text-lg">Recuperar contraseña</p>
        </Link>
        <div className="flex mt-8">
            <input 
                type="submit" 
                value='Iniciar Sesión'
                className="bg-[#3681F0] px-4 py-5 rounded-md w-full text-white font-bold text-xl md:inline-block md:w-full md:px-4 md:py-4 cursor-pointer mb-8"
            />
        </div>
      </form>
      <div className="w-full text-center mb-10">
        <p>
          ¿No tienes una cuenta? 
          <Link href={'/SignIn'}>
            <span className="text-[#3681F0]"> Registrate</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn