import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Recepies = () => {
    const recepiess = useSelector(state => state.recipe.value)
    const accounts = useSelector(state => state.accounts.value)
    const user = useSelector(state => state.user.value) 
    console.log(accounts)
    console.log(recepiess)
    const [recepies , setRecepies] = useState(recepiess) ; 
    let navigate = useNavigate() ; 
    useEffect (()=> { 
      if(user.name === undefined)
        navigate('/')
    },[])
  return (
    <div>
        <Navbar/>

        <h3>Recepies</h3>
        <input type="text" onChange={e => setRecepies(recepiess.filter(rcp => rcp.recepy.includes(e.target.value)))} />
        <div className='recepies'>
        {
        recepies.map(recepie =>
            <div key={recepie.id}>
                <img src={recepie.imageofRecepy} alt="" />
                <div >
                <img src={recepie.personImage} alt="" />
                <div>
                <h6>{recepie.name}</h6>
                <p>{recepie.email}</p>
                </div>
                <h4>{recepie.recepy}</h4>
                <p>{recepie.paragraph}</p>
                <button onClick={()=>navigate(`/recepies/${recepie.id}`)}>view More</button>
                </div>
            </div>
            )
        }
        </div>
        </div>
  )
}

export default Recepies