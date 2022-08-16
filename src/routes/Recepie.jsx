import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Recepie = () => {
    const user = useSelector(state => state.user.value) 
    const navigate = useNavigate() ; 
    useEffect(()=> { 
      if(user.name === undefined)
        navigate('/')
    },[])
    let {idUser} = useParams()
    const recepies = useSelector(state => state.recipe.value) ; 
    const one = recepies.find(state => state.id == idUser )
    console.log(one) 
    const {id ,name ,  email , imageofRecepy , paragraph , personImage , recepy } = one
    return (
    <div>
        <Navbar/>
        <div>{name}</div>
         <div>{email}</div>
         <img src={imageofRecepy}/>
        <div>{paragraph}</div>
       <img src={personImage}/>
        <div>{recepy}</div>
        <button onClick={()=>navigate('/Signin')}>Log out</button>
    </div>
  )
}

export default Recepie