import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineProject} from 'react-icons/ai'
import {IoIosContacts} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills"onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#project"onClick={()=> setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContacts/></a>
    </nav>
  )
}

export default Nav