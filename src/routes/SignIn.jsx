import {useEffect, useReducer} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logOut, singUp} from '../states/userSlice' ; 
import { Link } from 'react-router-dom';
const intialState = {
  email : '' , 
  password : '' ,
}
const reducer = (state ,action) => {
    switch(action.type) { 
      case  'EMAIL' : 
        return {...state , email:action.payload} ; 
      case 'PASSWORD' : 
        return {...state , password: action.payload}
    
      default : throw new Error 
    }

}

const SignIn = () => {
  const dispatchRedux = useDispatch() ; 
  let navigate = useNavigate() ; 
  const user = useSelector(state => state.user.value)
  const [state , dispatch] = useReducer(reducer ,intialState) ;

  const accounts = useSelector(state => state.accounts.value)
  const {password , email} = useSelector(state => state.user.value) ; 
  console.log(password, email )
  console.log(state )

  const SigninComplet = () => { 
      console.log()
      const accountss = accounts.find(account => {
        const {email , password} = account
        console.log(email, '===' , state.email , '  ' , password , '===' , state.password)
        return email === state.email && password === state.password ; 
      })
      console.log(accountss)
      if (accountss !== undefined) {
        dispatchRedux(singUp({...accountss  })) ; 
        navigate('/recepies')
      }
      else { 
        console.log(accounts)
      }
    }
    useEffect(()=> { 
      dispatchRedux(logOut()) ;
      console.log(user)
    },[])
  return (
    <div className='signin'>
    <div className='container'>
        <input type="text" placeholder='email' 
        onChange={(e) => dispatch({type: 'EMAIL',payload:e.target.value})}
        />
        <input type="password" placeholder='password' 
        onChange={(e) => dispatch({type: 'PASSWORD',payload:e.target.value})}
        />
        <div >
        <button onClick={SigninComplet}>Sign in </button>
        <p>don't have account <Link to="/SignUp"> Sign Up</Link> </p>
      </div>
    </div>
    </div>
  )
}

export default SignIn