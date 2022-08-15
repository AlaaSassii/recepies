import React , {useReducer} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { singUp } from '../states/userSlice';
import {useNavigate} from 'react-router-dom'
import { addAccount } from '../states/accountsSlice';
const initialState = { 
    name : '' , 
    email : '' , 
    password : '' , 
    image : ''  ,

}
function  reducer(state ,action ){ 
    switch(action.type) { 
            case 'INTIALIZE' : 
                return initialState ; 
            case 'NAME' : 
                return {...state , name:action.payload} ; 
            case 'EMAIL' : 
                return {...state , email:action.payload} ; 
            case 'FILE' : 
                return {...state , image:action.payload} ; 
            case 'PASSWORD' : 
                return {...state , password:action.payload} ; 

            default : throw new Error ; 
    }
}
const SignUp = () => {
    const navigate = useNavigate() ; 
    const user = useSelector( state => state.user.value ) ; 
    const accounts = useSelector(state => state.accounts.value) ;
    console.log('accounts',accounts)
    console.log('user',user)
    const [state , dispatch] = useReducer(reducer, initialState) ; 
    console.log(state);
    const dispatchRedux = useDispatch() ;
    const singup = (state) => {
        if((Object.values(state).find(value => value.length === 0 ) === undefined)){
            dispatchRedux(singUp({...state  })) ; 
            // const account = {...state,id:new Date().getTime()}
            // dispatchRedux(addAccount('account')) ;
            dispatch({type:'INTIALIZE'}) ;
            navigate('../recepies') 
        }
    }
    return (
    <div>
        <input type="text" placeholder='name'    onChange={(e) => dispatch({type: 'NAME',payload:e.target.value})} />
        <input type="text" placeholder='email'  onChange={(e) => dispatch({type: 'EMAIL',payload:e.target.value})}/>
        <input type="file" placeholder='image' onChange={(e) => dispatch({type: 'FILE',payload:e.target.value})} /> 
        <input type="password" placeholder='password' onChange={(e) => dispatch({type: 'PASSWORD',payload:e.target.value})}  />

        <button onClick={()=>singup(state)} >Sign Up </button>
    </div>
  )
}

export default SignUp