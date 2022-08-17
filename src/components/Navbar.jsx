import React from 'react'
import {useSelector , useDispatch} from 'react-redux' 
import { Link } from 'react-router-dom'
import { logOut } from '../states/userSlice'
import {BsYoutube , BsTwitter , BsInstagram , BsFacebook} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'
const Navbar = () => {
  const {name ,email ,  personImage} = useSelector(state => state.user.value)
  // console.log('navbar_imageUser:' , personImage)
  // redux
  const dispatch = useDispatch() ; 
  return (
    <nav>
        <h1>Dashbored<span>.</span></h1>
       
          <div className='person-data'>
            <img src={personImage} alt="image" />
            <div>
            <p>{name}</p>
            <p>{email}</p>
            </div>
          </div>
          
        <ul>
          <li><Link to='/recepies' >Home<span>.</span></Link></li>
          {/* conditions in style when the use has an account or no  */}
          <li><Link to='/AddRecepi'>Add Recepie<span>.</span></Link></li>
          <li><Link onClick={()=>dispatch(logOut)} to='/'>Logout<span>.</span></Link></li>
        </ul>

        <div className='FollowUs'>
          <h1>Follow us in</h1>
          <div>
            <span><BsFacebook/></span>
            <span><BsInstagram/></span>
            <span><BsTwitter/></span>
            <span><BsYoutube/></span>
          </div>
          <div>
          <span>nocopywrite </span> <span><AiOutlineCopyright/></span>
          </div>
        </div>
    </nav>
  )
}

export default Navbar