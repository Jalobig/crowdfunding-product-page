import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import IconMenu from "../../images/icon-hamburger.svg";
import IconClose from "../../images/icon-close-menu.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const media = useMediaQuery("only screen and (max-width:479px)");
  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
    {media && isActive && <div className={classes.backdrop}></div>}
      <nav className={classes.navbar}>
        <img
          src={Logo}
          alt="Logo of crowdfund"
          className={classes.navbar__logo}
        />
        {media && (
          <img
            src={isActive ? IconClose : IconMenu}
            alt={`${isActive ? "Close" : "Menu"} Icon`}
            className={classes.navbar__icon}
            onClick={menuHandler}
          />
        )}
        {(!media || isActive) && (
          <ul className={classes.navbar__nav}>
            <li className={classes["navbar__nav--item"]}>About</li>
            <li className={classes["navbar__nav--item"]}>Discover</li>
            <li className={classes["navbar__nav--item"]}>Get Started</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
