import React from 'react'
import './project.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  },
  {
    id:2,
    image:IMG2,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  },
  {
    id:3,
    image:IMG3,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  },
  {
    id:4,
    image:IMG4,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  },
  {
    id:5,
    image:IMG5,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  },
  {
    id:6,
    image:IMG6,
    title:'this project title',
    github:'https://github.com',
    demo:'https://demo.com'
  }
]
const project = () => {
  return (
    <section id='project'>
      <h5>My Recent work</h5>
      <h2>Project</h2>
      <div className="container project_container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
            <article key={id} className="project_item">
              <div className="project_item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='project_item-cta'>
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default project