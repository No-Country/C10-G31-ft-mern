import { useState } from "react"

const SignIn = () => {

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([name, surname, phone, email, password, repeatPassword].includes('')) {
            console.log('Todos los campos son obligatorios')
            return
        }
        if( password !== repeatPassword) {
            console.log('Los password no son iguales')
            return 
        }
        console.log(name, surname, phone, email, password, repeatPassword)
    }

  return (
    <div className="px-4 mt-40">
      <h2 className="text-center">¡Bienvenido a Spotech!</h2>
      <form 
        className="flex flex-col gap-3 mt-16"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="name">Nombre/s</label>
            <input 
                type="text" 
                id='name' 
                className="border-2 rounded-md p-1"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="surname">Apellido/s</label>
            <input 
                type="text" 
                id='surname' 
                className="border-2 rounded-md p-1"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="phone">N° de teléfono</label>
            <input 
                type="text" 
                id='phone'
                className="border-2 rounded-md p-1"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </div>
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
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs" htmlFor="repeat-password">Confirmar Contraseña</label>
            <input 
                type="password" 
                id='repeat-password'
                className="border-2 rounded-md p-1"
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}
            />
        </div>

        <div className="flex">
            <input 
                type="submit" 
                value='Continuar' 
                className="bg-gray-600 px-3 py-5 rounded-md mt-7 w-full text-white font-bold text-xl md:inline-block md:w-auto md:px-12 cursor-pointer"
            />
        </div>
      </form>
    </div>
  )
}

export default SignIn
