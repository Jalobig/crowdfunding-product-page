import React from "react";
import classes from "./PrimaryButton.module.scss";

const PrimaryButton = (props) => {
  return <button type={props.type} onClick={props.onClick} className={`${classes.button} ${props.className}`}>{props.children}</button>;
};

export default PrimaryButton;
