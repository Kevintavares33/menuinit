import React from 'react'
import './MComp.css'

const MComp = () => {
  return (
    <div className='header'>
    <h1><a href='/previc'>Previc</a></h1>
    <ul className='menu'>
        <li>
            <a href='/home'> HOME</a>
           
            <a href='/about'> ABOUT</a>
           
            <a href='/contact'> CONTACT</a>
        </li>
    </ul>
    </div>
  )
}

export default MComp