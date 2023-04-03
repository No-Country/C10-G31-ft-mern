import { useState } from "react"

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
    <div className="p-4">
        <div className="text-center mt-20">
            <div className="bg-gray-300 inline-block w-auto p-16 rounded-full">Logo</div>
        </div>
      <h2 className="text-center mt-24 mb-12">¡Inicia Sesión en Spotech!</h2>
      <form 
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="email">E-mail</label>
            <input 
                type="email" 
                id='email'
                className="border-2 rounded-md p-1"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                id='password'
                className="border-2 rounded-md p-1"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>

        <div className="flex">
            <input 
                type="submit" 
                value='Iniciar Sesión'
                className="bg-gray-600 p-3 rounded-md mt-6 w-full text-white font-bold text-xl md:inline-block md:w-auto md:px-12 cursor-pointer"
            />
        </div>
      </form>
    </div>
  )
}

export default LogIn