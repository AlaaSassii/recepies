import React , {useReducer ,useEffect, useRef, useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { logOut, singUp } from '../states/userSlice';
import {useNavigate} from 'react-router-dom'
import { addAccount } from '../states/accountsSlice';

const initialState = { 
    name : '' , 
    email : '' , 
    password : '' , 
    personImage  : ''  ,

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
                return {...state , personImage:action.payload} ; 
            case 'PASSWORD' : 
                return {...state , password:action.payload} ; 

            default : throw new Error ; 
    }
}
const SignUp = () => {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();

    const navigate = useNavigate() ; 
    const dispatchRedux = useDispatch() ;
   
    const user = useSelector( state => state.user.value ) ; 
    const accounts = useSelector(state => state.accounts.value) ;
    console.log('accounts',accounts)
    console.log('user',user)
    const [state , dispatch] = useReducer(reducer, initialState) ; 
    console.log(state);
    const singup = (state) => {
        if((Object.values(state).find(value => value.length === 0 ) === undefined)){
            dispatchRedux(singUp({...state  })) ; 
            const account = {...state,id:new Date().getTime()}
            dispatchRedux(addAccount(account)) ;
            dispatch({type:'INTIALIZE'}) ;
            navigate('../recepies') 
        }
    }

    // sign in and sign up log out by default 
    useEffect(()=> { 
        dispatchRedux(logOut)
    },[])

    // image file 
    useEffect(() => {
        
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result );
        };
        reader.readAsDataURL(image);
        dispatch({type: 'FILE',payload:preview})
        } else {
          setPreview(null);
        }
      }, [image,preview]);  // => error with preview 
    return (
    <div className='SignUp'>
        <div className='container'>
        <div className='inputs'>
        <div>
        <input type="text" placeholder='name'    onChange={(e) => dispatch({type: 'NAME',payload:e.target.value})} />
        <input type="text" placeholder='email'  onChange={(e) => dispatch({type: 'EMAIL',payload:e.target.value})}/>
        {/* <input type="file" placeholder='image' onChange={(e) => dispatch({type: 'FILE',payload:e.target.value})} />  */}
        <input type="password" placeholder='password' onChange={(e) => dispatch({type: 'PASSWORD',payload:e.target.value})}  />
        {/* image Start */}
        <div >
      <form>
        {preview ? (
        <img
            src={preview}
            style={{ objectFit: "cover" }}
            onClick={() => {
            setImage(null);
            }}
          />
        ) : (
          <button
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            Add Image
          </button>
        )}
        <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
            setImage(file);
            } else {
            setImage(null);
            }
          }}
        />
      </form>
        </div>
        {/* image End */}

        <button onClick={()=>singup(state)} >Sign Up </button>
        </div>
        </div>
        <div className='image'>
            <img src="https://medias.toutelanutrition.com/ressource/104/Fast%20Food.jpg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default SignUp