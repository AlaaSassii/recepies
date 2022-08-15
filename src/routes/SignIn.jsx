import {useReducer} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const intialState = {
  email : '' , 
  password : '' ,
}
const reducer = (state ,action) => {
    switch(action.type) { 
      case  'EMAIL' : 
        return {...state , email:action.payload} ; 
      case 'PASSWORD' : 
        return {...state , password : action.paylaod}
    
      default : throw new Error 
    }

}

const SignIn = () => {
  const {password , email} = useSelector(state => state.user.value) ; 
  console.log(password, email )
  let navigate = useNavigate() ; 
  const [state , dispatch] = useReducer(reducer ,intialState) ; 

  const SigninComplet = () => { 
      navigate('/recepies')
    }

  return (
    <div>
        <input type="text" placeholder='email' 
        onChange={(e) => dispatch({type: 'EMAIL',payload:e.target.value})}
        />
        <input type="password" placeholder='password' 
        onChange={(e) => dispatch({type: 'PASSWORD',payload:e.target.value})}
        />
        <button onClick={SigninComplet}>Sign in </button>
    </div>
  )
}

export default SignIn