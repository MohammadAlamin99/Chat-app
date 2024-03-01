import { createSlice } from '@reduxjs/toolkit'

export const sendMessageSlice = createSlice({
  name: 'message',
  initialState: {
    message:[],
  },

  reducers: {
    setMessage:(state, action)=>{
        state.message=action.payload
    }
  },
})

export const {setMessage} = sendMessageSlice.actions
export default sendMessageSlice.reducer;