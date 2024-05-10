import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
    name:"details",
    initialState: {
        details:[],
    },
    reducers:{
        setDetails:(state, action)=>{
            state.details = action.payload
        }
    }

})



export const {setDetails} = userDetailsSlice.actions;
export default userDetailsSlice.reducer;