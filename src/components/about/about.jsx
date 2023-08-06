import React from 'react'
import './about.css'
import ME from '../../assets/portfolio1.jpg'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About_image"/>
          </div>
        </div>
        <div className="about__content">
          <p>
            I am a Full Stack Web Developer with 3+ years of experience in the field, having
            Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Antarctica.
            Some species live in houses where they hunt insects attracted by artificial light.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about