import React from "react";
import classes from "./ModalSuccess.module.scss";
import IconCheck from "../../images/icon-check.svg";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const ModalSuccess = (props) => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes.modal__group}>
        <div className={classes.modal__circle}></div>
        <img src={IconCheck} alt="Check Icon" className={classes.modal__icon} />
        </div>
        <h2 className={classes.modal__heading}>Thanks for you support!</h2>
        <p className={classes.modal__text}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <PrimaryButton onClick={props.onClick}>Got it!</PrimaryButton>
      </div>
    </div>
  );
};

export default ModalSuccess;
