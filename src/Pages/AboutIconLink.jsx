import React from 'react'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
      <i size={30} class="fa-solid fa-question"></i>
      </Link>
    </div>
  )
}

export default AboutIconLink
