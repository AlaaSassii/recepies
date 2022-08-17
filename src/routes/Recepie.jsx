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
    <>
        <Navbar/>
        <div className='recepiesCo'>
          <div className='centerrecepies'>

        <div className='image'>
                <img src={imageofRecepy} alt="" />
                </div>
                <div className='person' >
                <div className='image'>
                <img src={personImage} alt=""  style={{width:'75px' , height:'75px'}}/>
                </div>
                <div>
                <h6>{name}</h6>
                <p>{email}</p>
                </div>
                </div>
                <div className='info'>
                <h4>{recepy}</h4>
                <p>{paragraph}</p>
                <button onClick={()=>navigate('/Signin')}>Log out</button>

                </div>
                </div>
        </div>
    </>
  )
}

export default Recepie
