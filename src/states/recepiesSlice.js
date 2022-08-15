import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";
const recepiesSlice = createSlice({
    name: 'recepies' , 
    initialState : {value:data }, 
    reducers : { 
        addRecepie : (state,action) => { 
            state.value = [...state.value, action.payload]
        }
    }
})

export const {addRecepie} = recepiesSlice.actions
export default recepiesSlice.reducer 