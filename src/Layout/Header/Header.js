import React from 'react'
import ImageHeroDesktop from '../../images/image-hero-desktop.jpg'
import ImageHeroMobile from '../../images/image-hero-mobile.jpg'
import classes from './Header.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
const media = useMediaQuery('only screen and (max-width:479px)')
  return (
    <header className={classes.header}>
      <img src={media? ImageHeroMobile:ImageHeroDesktop} alt='Background Hero' className={classes.header__img}/>
      <Navbar/>
    </header>
  )
}

export default Header