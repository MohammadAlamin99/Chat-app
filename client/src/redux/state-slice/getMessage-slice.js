import { createSlice } from '@reduxjs/toolkit'

export const getMessageSlice = createSlice({
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

export const {setMessage} = getMessageSlice.actions
export default getMessageSlice.reducer;