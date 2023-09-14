import React from "react";
import classes from "./Modal.module.scss";
import IconClose from "../../images/icon-close-modal.svg";

const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <img
          src={IconClose}
          alt="Close Icon"
          className={classes.modal__close}
        />
        <h1 className={classes.modal__heading}>Back this project</h1>
        <p className={classes.modal__description}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className={classes.pledge}>
        <div className={classes.pledge__fullrow}>
          <h2 className={classes.pledge__heading}>Pledge with no reward</h2>
          <p className={classes.pledge__text}>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
        </div>
        </div>
        <div className={classes.pledge}>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <h2 className={classes.pledge__heading}>Bamboo Stand</h2>
              <button className={classes["pledge__button--amount"]}>
                Pledge $25 or more
              </button>
            </div>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>101</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
          </div>
          <p className={classes.pledge__text}>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
        </div>
        <div className={classes.pledge}>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <h2 className={classes.pledge__heading}>Black Edition Stand</h2>
              <button className={classes["pledge__button--amount"]}>
                Pledge $75 or more
              </button>
            </div>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>64</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
          </div>
          <p className={classes.pledge__text}>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
        </div>
        <div className={classes.pledge}>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <h2 className={classes.pledge__heading}>
                Mahogany Special Edition
              </h2>
              <button className={classes["pledge__button--amount"]}>
                Pledge $200 or more
              </button>
            </div>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>0</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
          </div>
          <p className={classes.pledge__text}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
