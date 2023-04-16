import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface Alert {
    msg: string,
    error: boolean
}
const initialState: Alert = {msg: '', error: false}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
      setAlert: (state, action) => {
        state.msg = action.payload.msg;
        state.error = action.payload.error;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setAlert } = alertSlice.actions

  export const selectAlert = (state: RootState) => state.alert
  
  export default alertSlice.reducer