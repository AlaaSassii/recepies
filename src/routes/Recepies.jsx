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
    < >
        <Navbar/>
        <h3>Recepies</h3>

        <div className='recepiesCo'>
        
        <input type="text" onChange={e => setRecepies(recepiess.filter(rcp => rcp.recepy.includes(e.target.value)))} placeholder='search for new recepies ' />
        <div className='recepies'>
        {
        recepies.map(recepie =>
            <div key={recepie.id} className="recepie">
                <div className='image'>
                <img src={recepie.imageofRecepy} alt="" />
                </div>
                <div className='person' >
                <div className='image'>
                <img src={recepie.personImage} alt=""  style={{width:'75px' , height:'75px'}}/>
                </div>
                <div>
                <h6>{recepie.name}</h6>
                <p>{recepie.email}</p>
                </div>
                </div>
                <div className='info'>
                <h4>{recepie.recepy}</h4>
                <p>{recepie.paragraph}</p>
                <button onClick={()=>navigate(`/recepies/${recepie.id}`)}>view More</button>
                </div>
                
            </div>
            )
        }
        </div>
        </div>
        </>
  )
}

export default Recepies