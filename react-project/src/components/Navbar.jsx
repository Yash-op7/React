import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-end bg-violet-300'>
        <Link to='/' style={{padding:'10px', backgroundColor:'black', color:'white'}}>Home</Link>
        <Link to='jobs' style={{padding:'10px', backgroundColor:'black', color:'white'}}>Jobs</Link>
        <Link to='/about' style={{padding:'10px', backgroundColor:'black', color:'white'}}>About</Link>
    </div>
  )
}

export default Navbar