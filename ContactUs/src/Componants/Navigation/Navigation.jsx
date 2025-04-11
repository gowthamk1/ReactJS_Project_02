import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className='logo'>
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <div className='nav-links'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
