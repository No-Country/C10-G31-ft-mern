import { createSlice } from '@reduxjs/toolkit'
import clienteAxios from '@/config/clienteAxiosspotech'
import { setAlert } from "../alert/alertSlice"

interface user {
  name: string | null
  auth: boolean
}

interface userAuth {
  userAuth: user
}

const initialState: userAuth = {
  userAuth: { name: null, auth: false }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        localStorage.setItem('spotechToken', action.payload.token)
      },
      verifyUser: (state, action) => {
        state.userAuth = action.payload
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, verifyUser } = authSlice.actions


  export const authUser = (email: string, password: string) => async (dispatch: any) => {
    try {
      const response = await clienteAxios.post('/user/auth', { email, password })
      const data = response.data
      dispatch(login({ token: data.token }))
    } catch (error: any) {
        if(error.response.data.errors) {
            dispatch(setAlert({msg: error.response.data.errors[0].message, error: true}))
        }
        if(error.response.data.message) {
            dispatch(setAlert({msg: error.response.data.message, error: true}))
        }
      setTimeout(() => {
        dispatch(setAlert({msg: '', error: false}))
      }, 3000);
    }
  }

  export const registerUser = (name: string, lastName: string, phone: string, email: string, password: string) => async (dispatch: any) => {
    try {
      const response = await clienteAxios.post('/user', { name, lastName, phone, email, password })
      const data = response.data
      dispatch(setAlert({msg: data.message, error: false}))
      setTimeout(() => {
        dispatch(setAlert({msg: '', error: false}))
      }, 3000);
    } catch (error: any) {
        if(error.response.data.errors) {
            dispatch(setAlert({msg: error.response.data.errors[0].message, error: true}))
        }
        if(error.response.data.message) {
            dispatch(setAlert({msg: error.response.data.message, error: true}))
        }
      setTimeout(() => {
        dispatch(setAlert({msg: '', error: false}))
      }, 3000);
    }
  }


  export const getUser = () => async (dispatch: any) => {
    const token = localStorage.getItem('spotechToken')
    
    if(!token) {
      return
    }

    const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      }
    }

    try {
      // TODO Agregar el endpoint correcto para obtener el perfil del usuario
      // const response = await clienteAxios('/user', config)
      // const data = response.data
      // dispatch(verifyUser({data}))

    } catch (error: any) {
      console.log(error)
    }
  }
  
  export default authSlice.reducer