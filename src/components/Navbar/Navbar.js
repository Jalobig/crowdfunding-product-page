import React from 'react'
import classes from './Navbar.module.scss'
import Logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
        <img src={Logo} alt='Logo of crowdfund' className={classes.navbar__logo}/>
        <ul className={classes.navbar__nav}>
        <li className={classes['navbar__nav--item']}>About</li>
        <li className={classes['navbar__nav--item']}>Discover</li>
        <li className={classes['navbar__nav--item']}>Get Started</li>

        </ul>
    </nav>
  )
}

export default Navbar