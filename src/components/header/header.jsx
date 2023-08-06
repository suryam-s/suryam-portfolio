import React from 'react'
import './header.css'
import Resume from './resume'
import ME from '../../assets/me-removebg-preview.png'
import HeaderSocial from './header_social'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>suryam sourya</h1>
        <h5 className="text-light">Fullstack Devloper</h5>
        <Resume />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="my_image" />
        </div>
        <a href="#contact" className='scroll_down'>scroll down</a>
      </div>
    </header>
  )
}

export default header