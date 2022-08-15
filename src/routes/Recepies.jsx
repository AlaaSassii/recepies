import React, { useState } from 'react'
import { useSelector } from 'react-redux'; 
import Navbar from '../components/Navbar';

const Recepies = () => {
    const recepiess = useSelector(state => state.recipe.value)
    const [recepies , setRecepies] = useState(recepiess) ; 
  return (
    <div>
        <Navbar/>

        <h3>Recepies</h3>
        <input type="text" onChange={e => setRecepies(recepiess.filter(rcp => rcp.recepy.includes(e.target.value)))} />
        <div className='recepies'>
        {
        recepies.map(recepie =>
            <div>
                <img src={recepie.imageofRecepy} alt="" />
                <div >
                <img src={recepie.personImage} alt="" />
                <div>
                <h6>{recepie.name}</h6>
                <p>{recepie.email}</p>
                </div>
                <h4>{recepie.recepy}</h4>
                <p>{recepie.paragraph}</p>
                <button>view More</button>
                </div>
            </div>
            )
        }
        </div>
        </div>
  )
}

export default Recepies