
import { createSlice } from "@reduxjs/toolkit"; 

const value ={ 
    name: undefined , 
    email: undefined , 
    password : undefined ,
    personImage  : 'file:///C:/fakepath/292161928_530933962149508_4086858403359898179_n.jpg'
}
const userSlice = createSlice({
    name:'user' , 
    initialState : {value} , 
    reducers : { 
        singUp : (state ,action) => { 
            state.value = action.payload
        },
        logOut : (state , action) => { 
            state.value = value
        }
    }
})
const name = { 
    name : ' ' , 

}
export const {singUp , logOut} = userSlice.actions
export default userSlice.reducer 