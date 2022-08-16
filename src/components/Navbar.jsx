import React from 'react'
import {useSelector , useDispatch} from 'react-redux' 
import { Link } from 'react-router-dom'
import { logOut } from '../states/userSlice'
const Navbar = () => {
  const {name ,email ,  personImage} = useSelector(state => state.user.value)
  // console.log('navbar_imageUser:' , personImage)
  // redux
  const dispatch = useDispatch() ; 
  return (
    <nav>
        <h1>Dashbored<span>.</span></h1>
        {
          true ? 
          <div>
            <img src={personImage} alt="image" />
            <p>{name}</p>
            <p>{email}</p>
          </div>
          : 
          <div>
             <img src={personImage} alt="image" />
            <p>{'none'}</p>
            <p>{'mone'}</p>
          </div>
        }
          <Link to='/recepies' >Home</Link>
          {/* conditions in style when the use has an account or no  */}
          <Link to='/AddRecepi'>Add Recepie</Link>
          <Link onClick={()=>dispatch(logOut)} to='/'>Logout</Link>
    </nav>
  )
}

export default Navbar