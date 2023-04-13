import Alert from '../components/Alert'
import { useState } from "react"

const SignIn = () => {

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ alert, setAlert ] = useState({msg: '', error: false})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if([name, surname, phone, email, password, repeatPassword].includes('')) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
              })
              setTimeout(() => {
                setAlert({msg: '', error: false})
              }, 3000);
              return
        }
        if( password !== repeatPassword) {
            setAlert({
                msg: 'Los Password no coinciden',
                error: true
              })
              setTimeout(() => {
                setAlert({msg: '', error: false})
              }, 3000);
              return
        }

        // TODO enviar los datos al backend
        console.log(name, surname, phone, email, password, repeatPassword)
    }

    const { msg } = alert

  return (
    <div className="px-4 mt-40 md:my-32 md:w-3/4 md:block md:m-auto">
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
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs md:text-xl" htmlFor="surname">Apellido/s</label>
            <input 
                type="text" 
                id='surname' 
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs md:text-xl" htmlFor="phone">N° de teléfono</label>
            <input 
                type="text" 
                id='phone'
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs md:text-xl" htmlFor="email">E-mail</label>
            <input 
                type="email" 
                id='email'
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs md:text-xl" htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                id='password'
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-bold text-xs md:text-xl" htmlFor="repeat-password">Confirmar Contraseña</label>
            <input 
                type="password" 
                id='repeat-password'
                className="border-2 rounded-md p-1 md:p-2 md:border-gray-400"
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}
            />
        </div>

        <div className="flex">
            <input 
                type="submit" 
                value='Continuar' 
                className="bg-[#3681F0] px-3 py-5 rounded-md mt-7 w-full text-white font-bold text-xl md:inline-block md:w-full md:px-12 md:text-2xl cursor-pointer"
            />
        </div>
      </form>
    </div>
  )
}

export default SignIn
