
import { createSlice } from "@reduxjs/toolkit";

const value = []

const accountSlice = createSlice({
    name: 'accounts' ,  
    initialState : {value} , 
    reducers : { 
        addAccount : (state , action) => { 
            state.value = [...state.value , action.payload]
        }
    }
})

export const {addAccount} = accountSlice.actions
export default accountSlice.reducer 