import React from "react";
import classes from "./PrimaryButton.module.scss";

const PrimaryButton = (props) => {
  return <button className={`${classes.button} ${props.className}`}>{props.children}</button>;
};

export default PrimaryButton;
