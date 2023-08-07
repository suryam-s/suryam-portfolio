import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend</h3>
          <div className="skill_content">
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill_details'>
              <div>
              <BsPatchCheckFill className='skill_container-icon'/>
              <h4>JavaScriprt</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>React js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_backend">
          <h3>Backend</h3>
          <div className="skill_content">
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>Express js</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
            <article className='skill_details'>
              <BsPatchCheckFill className='skill_container-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Begineer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills