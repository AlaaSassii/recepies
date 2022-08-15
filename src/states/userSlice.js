
import { createSlice } from "@reduxjs/toolkit"; 

const value ={ 
    name: 'undefind'  , 
    email: 'undefind@gmail.com' , 
    password : 'undefind' ,
    image : 'file:///C:/fakepath/292161928_530933962149508_4086858403359898179_n.jpg'
}
const userSlice = createSlice({
    name:'user' , 
    initialState : {value} , 
    reducers : { 
        singUp : (state ,action) => { 
            state.value = action.payload
        }
    }
})

export const {singUp} = userSlice.actions
export default userSlice.reducer 