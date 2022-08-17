import React ,{useReducer , useState , useRef , useEffect } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import { addRecepie } from '../states/recepiesSlice';

const initialState = { 
    recepy: ''  , 
    description: '' ,
    imageofRecepy : '' , 
    paragraph : '' , 
    id : new Date().getTime().toString()

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
        return {...state , imageofRecepy: action.payload}  ;
        default:
        throw new Error();
    }
  }

const AddRecepie = () => {

    const user = useSelector(state => state.user.value) 
    let navigate = useNavigate() ; 
    useEffect(()=> { 
      if(user.name === undefined)
        navigate('/')
    },[])


    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchRedux  = useDispatch()  ; 
    const List = useSelector(state => state.recipe.value) ; 
    console.log(List)
    console.log(state) ; 

    // file 
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const fileInputRef = useRef();
    useEffect(() => {
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result );
      };
      
      reader.readAsDataURL(image);
      dispatch({type: 'CHANGE_image',payload:preview})
      } else {
        setPreview(null);
      }
    }, [image , preview]);  // => error with preview 

    // function button 
    const submit = (state) => {
      console.log(user)
        if((Object.values(state).find(value => value.length === 0 ) === undefined)){
            dispatchRedux(addRecepie({...state ,...user})) ; 
            // mizil fama login shyt7at ism user w wihu
            dispatch({type:'INTIALIZE'}) ; 
            navigate('/recepies')
        }
    }
  return (
    <>
        <Navbar/>
        <div className='addRecepieCo'>
        <h1>Add a Recepie</h1>
        <input type="text" placeholder='Name of the recepie' onChange={(e) => dispatch({type: 'CHANGE_nameRecepie',payload:e.target.value})} />
       
        <input type="text" placeholder='recipie description and how to make it ' onChange={(e) => dispatch({type: 'CHANGE_description',payload:e.target.value})}/>
        <input type="text" placeholder='notes' onChange={(e) =>dispatch({type: 'CHANGE_notes',payload:e.target.value}) }/>
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
        <button  className='submit' onClick={()=>{submit(state)}}>publish</button>
        </div>
    </>
  )
}

export default AddRecepie