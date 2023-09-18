import React from "react";
import classes from "./Modal.module.scss";
import IconClose from "../../images/icon-close-modal.svg";
import IconDollar from '../../images/dollar.svg'
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import useInput from '../../hooks/useInput'
import useMediaQuery from "../../hooks/useMediaQuery";

const Modal = (props) => {
  const media = useMediaQuery('only screen and (max-width:600px)')
  const isNoRewardChosen = props.modal.noreward.isChosen;
  const isBambooDisabled = props.modal.bamboo.amount === 0;
  const isBambooChosen = props.modal.bamboo.isChosen;
  const isBlackEditionDisabled = props.modal.blackEdition.amount === 0;
  const isBlackEditionChosen = props.modal.blackEdition.isChosen;
  const isMahoganyDisabled = props.modal.mahogany.amount === 0;
  const isMahoganyChosen = props.modal.mahogany.isChosen;
  const validateInput = (text) => text.length !== 0;
  const {
    value: enterednoReward,
    isValid: noRewardIsValid,
    valueChangeHandler: noRewardChangeHandler,
    reset: noRewardReset,
  } = useInput(validateInput);

  const noRewardSubmitHandler = (e) => {
    e.preventDefault();
    if (!noRewardIsValid || Number.isNaN(+enterednoReward) ) {
      return;
    }
    props.newBackerHandler(+enterednoReward)
    noRewardReset()
    props.onClose()
    props.onSuccess()
  };
  const {
    value: enteredBamboo,
    isValid: bambooIsValid,
    valueChangeHandler: bambooChangeHandler,
    reset: bambooReset,
  } = useInput(validateInput);

  const bambooSubmitHandler = (e) => {
    e.preventDefault();
    if (!bambooIsValid || Number.isNaN(+enteredBamboo ) || +enteredBamboo < 25) {
      return;
    }
    props.newBackerHandler(+enteredBamboo)
    props.bambooAmountReduction()
    bambooReset()
    props.onClose()
    props.onSuccess()
  };
  const {
    value: enteredBlackEdition,
    isValid: blackEditionIsValid,
    valueChangeHandler: blackEditionChangeHandler,
    reset: blackEditionReset,
  } = useInput(validateInput);

  const blackEditionSubmitHandler = (e) => {
    e.preventDefault();
    if (!blackEditionIsValid || Number.isNaN(+enteredBlackEdition ) || +enteredBlackEdition < 75) {
      return;
    }
    props.newBackerHandler(+enteredBlackEdition)
    props.blackEditionAmountReduction()
    blackEditionReset()
    props.onClose()
    props.onSuccess()
  };


  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div className={classes.modal__row}>
        <img
          src={IconClose}
          alt="Close Icon"
          className={classes.modal__close}
          onClick={props.onClose}
          />
        <h1 className={classes.modal__heading}>Back this project</h1>
          </div>
        <p className={classes.modal__description}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div
          className={`${classes.pledge} ${
            isNoRewardChosen ? classes.selected : ""
          }`}
        >
          <div className={classes.pledge__fullrow}>
        <div className={classes.pledge__row}>
          <div  className={classes.pledge__group}>

            <div className={classes.pledge__selectrow} onClick={props.noRewardSelection}>
              <div className={classes.pledge__select}>
                {isNoRewardChosen && (
                  <div className={classes.pledge__selected}></div>
                  )}
              </div>
              <h2 className={classes.pledge__heading} >Pledge with no reward</h2>
            </div>
                  </div>
                </div>

            <p className={classes.pledge__text}>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
            {isNoRewardChosen&& <form onSubmit={noRewardSubmitHandler} className={classes.form}>
            <p className={classes.form__label}>Enter your pledge</p>
            <div className={classes.form__group}>
            <div className={classes['form__input--group']}>
            <img  src={IconDollar} alt="Icon of a USD dollar" className={classes.form__icon} />
            <input className={classes.form__input} placeholder="0"
            value={enterednoReward}
            onChange={noRewardChangeHandler}
            />
            </div>
            <PrimaryButton type='submit'>Continue</PrimaryButton>
            </div>
          </form>}
          </div>
        </div>
        <div
          className={`${classes.pledge} ${
            isBambooChosen ? classes.selected : ""
          } ${isBambooDisabled ? classes.pledge__disabled : ""}`}
        >
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <div className={classes.pledge__selectrow} onClick={!isBambooDisabled && props.bambooSelection}>
                <div className={classes.pledge__select}>
                  {isBambooChosen && (
                    <div className={classes.pledge__selected}></div>
                  )}
                </div>
                <h2 className={classes.pledge__heading}>Bamboo Stand</h2>
              </div>
              <p className={classes["pledge__button--amount"]}>
                Pledge $25 or more
              </p>
            </div>
            {!media && <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>{props.modal.bamboo.amount}</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>}
          </div>
          <p className={classes.pledge__text}>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
            {media && <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>{props.modal.bamboo.amount}</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>}

         {isBambooChosen&& <form onSubmit={bambooSubmitHandler} className={classes.form}>
            <p className={classes.form__label}>Enter your pledge</p>
            <div className={classes.form__group}>
            <div className={classes['form__input--group']}>
            <img  src={IconDollar} alt="Icon of a USD dollar" className={classes.form__icon} />
            <input className={classes.form__input} placeholder="25" 
            value={enteredBamboo}
            onChange={bambooChangeHandler}
            />
            </div>
            <PrimaryButton>Continue</PrimaryButton>
            </div>
          </form>}
        </div>
        <div
          className={`${classes.pledge} ${
            isBlackEditionChosen ? classes.selected : ""
          } ${isBlackEditionDisabled ? classes.pledge__disabled : ""}`}
        >
          <div>
            <div className={classes.pledge__row}>
              <div className={classes.pledge__group}>
                <div className={classes.pledge__selectrow} onClick={props.blackEditionSelection}>
                  <div className={classes.pledge__select}>
                    {isBlackEditionChosen && (
                      <div className={classes.pledge__selected}></div>
                    )}
                  </div>
                  <h2 className={classes.pledge__heading}>
                    Black Edition Stand
                  </h2>
                </div>
                <p className={classes["pledge__button--amount"]}>
                  Pledge $75 or more
                </p>
              </div>
              {!media && <div className={classes.pledge__group}>
                <p className={classes.pledge__amount}>{props.modal.blackEdition.amount}</p>
                <p className={classes["pledge__amount-text"]}>left</p>
              </div>}
            </div>
            <p className={classes.pledge__text}>
              You get a Black Special Edition computer stand and a personal
              thank you.{!media && <br/>} You’ll be added to our Backer member list. Shipping is
              included.
            </p>
              {media && <div className={classes.pledge__group}>
                <p className={classes.pledge__amount}>{props.modal.blackEdition.amount}</p>
                <p className={classes["pledge__amount-text"]}>left</p>
              </div>}
            {isBlackEditionChosen && <form onSubmit={blackEditionSubmitHandler} className={classes.form}>
            <p className={classes.form__label}>Enter your pledge</p>
            <div className={classes.form__group}>
            <div className={classes['form__input--group']}>
            <img  src={IconDollar} alt="Icon of a USD dollar" className={classes.form__icon} />
            <input className={classes.form__input} placeholder="75" 
            value={enteredBlackEdition}
            onChange={blackEditionChangeHandler}
            />
            </div>
            <PrimaryButton>Continue</PrimaryButton>
            </div>
          </form>}
          </div>
        </div>
        <div
          className={`${classes.pledge} ${
            isMahoganyChosen ? classes.selected : ""
          } ${isMahoganyDisabled ? classes.pledge__disabled : ""}`}
        >
          <div>
            <div className={classes.pledge__row}>
              <div className={classes.pledge__group}>
                <div className={classes.pledge__selectrow}>
                  <div className={classes.pledge__select}>
                    {isMahoganyChosen&&<div className={classes.pledge__selected}></div>}
                  </div>
                  <h2 className={classes.pledge__heading}>
                    Mahogany Special Edition
                  </h2>
                </div>
                <p className={classes["pledge__button--amount"]}>
                  Pledge $200 or more
                </p>
              </div>
              {!media && <div className={classes.pledge__group}>
                <p className={classes.pledge__amount}>0</p>
                <p className={classes["pledge__amount-text"]}>left</p>
              </div>}
            </div>
            <p className={classes.pledge__text}>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you.
              You’ll be added to our Backer member list.
              Shipping is included.
            </p>
              {media && <div className={classes.pledge__group}>
                <p className={classes.pledge__amount}>0</p>
                <p className={classes["pledge__amount-text"]}>left</p>
              </div>}
            {isMahoganyChosen&& <div className={classes.form}>
            <p className={classes.form__label}>Enter your pledge</p>
            <div className={classes.form__group}>
            <div className={classes['form__input--group']}>
            <img  src={IconDollar} alt="Icon of a USD dollar" className={classes.form__icon} />
            <input className={classes.form__input} placeholder="200" />
            </div>
            <PrimaryButton onClick={()=> {
              props.onClose()
              props.onSuccess()
            }}>Continue</PrimaryButton>
            </div>
          </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
