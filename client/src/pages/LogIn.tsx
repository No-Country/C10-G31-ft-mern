import { useState } from "react"
import Link from "next/link"

const LogIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([email, password].includes('')) {
            console.log('Todos los campos son obligatorios')
            return
        }
        console.log(email, password)
    }

  return (
    <div className="px-4">
        <div className="flex justify-center items-cenetr mt-28">
            <p className="bg-gray-300 h-40 w-40 rounded-full flex items-center justify-center text-3xl font-bold">Logo</p>
        </div>
      <form 
        className="flex flex-col mt-36"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-x-4 gap-y-2">
            <label className="font-bold text-xs" htmlFor="email">E-mail</label>
            <input 
                type="email" 
                id='email'
                className="border-2 rounded-md p-2"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2 mt-3">
            <label className="font-bold text-xs" htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                id='password'
                className="border-2 rounded-md p-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>

        <Link className="mt-4" href='/'>
          <p className="text-blue-700 text-xs">Recuperar contraseña</p>
        </Link>

        <div className="flex mt-8">
            <input 
                type="submit" 
                value='Iniciar Sesión'
                className="bg-gray-600 px-4 py-5 rounded-md w-full text-white font-bold text-xl md:inline-block md:w-auto md:px-12 cursor-pointer"
            />
        </div>
      </form>
    </div>
  )
}

export default LogIn