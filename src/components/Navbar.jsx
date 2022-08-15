import React from 'react'
import {useSelector} from 'react-redux' 
import { Link } from "react-router-dom";
const Navbar = () => {
  const {name , image} = useSelector(state => state.user.value)
  console.log('navbar_imageUser:' , image)
  return (
    <nav>
        <button>add </button>
        { name !==  'undefind' && <h2>{name}</h2>} 
        <img src={image} /> 
    </nav>
  )
}

export default Navbar