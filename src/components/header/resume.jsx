import React from 'react'
import cv from '../../assets/Suryam-resume.pdf'

const resume = () => {
  return (
    <div className='resume'>
        <a href={cv} download className='btn'>Download resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default resume