import React ,{useReducer} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import Navbar from '../components/Navbar';
import { addRecepie } from '../states/recepiesSlice';
const initialState = { 
    recepy: ''  , 
    description: '' ,
    image : '' , 
    paragraph : '' , 

}

function reducer(state, action) {
    switch (action.type) {
        case 'INTIALIZE' : 
            return initialState ; 
        case 'CHANGE_nameRecepie' : 
            return {...state , recepy:action.payload} ; 
        
        case 'CHANGE_description' : 
            return {...state , description:action.payload} ;
        case 'CHANGE_notes' : 
            return {...state , paragraph:action.payload} ;  
        case 'CHANGE_image' : 
        const [f] = action.payload;
        return {...state , image: action.payload}  ;
        default:
        throw new Error();
    }
  }

const AddRecepie = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchRedux  = useDispatch()  ; 
    const List = useSelector(state => state.recipe.value) ; 
    console.log(List)
    console.log(state) ; 
    // function button 
    const submit = (state) => {
        if((Object.values(state).find(value => value.length === 0 ) === undefined)){
            dispatchRedux(addRecepie({...state ,id:new Date().getTime()})) ; 
            // mizil fama login shyt7at ism user w wihu
            dispatch({type:'INTIALIZE'}) ; 
        }
       
    }
  return (
    <div>
        <Navbar/>
        <h1>Add a Recepie</h1>
        <input type="text" placeholder='Name of the recepie' onChange={(e) => dispatch({type: 'CHANGE_nameRecepie',payload:e.target.value})} />
       
        <input type="text" placeholder='recipie description and how to make it ' onChange={(e) => dispatch({type: 'CHANGE_description',payload:e.target.value})}/>
        <input type="file" name="" id=""  placeholder='add an image drag and drop an image' onChange={(e) => dispatch({type: 'CHANGE_image',payload:e.target.value})}/>
        <input type="text" placeholder='notes' onChange={(e) =>dispatch({type: 'CHANGE_notes',payload:e.target.value}) }/>
        <button onClick={()=>submit(state)}>publish</button>
    </div>
  )
}

export default AddRecepie