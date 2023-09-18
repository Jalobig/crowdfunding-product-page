import React, { useState } from "react";
import classes from "./Main.module.scss";
import LogoMastercraft from "../../images/logo-mastercraft.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import BookmarkButton from "../../components/Buttons/BookmarkButton/BookmarkButton";
import Modal from "../../components/Modal/Modal";
import ModalSuccess from "../../components/Modal/ModalSuccess";

const Main = () => {
  const locale = "en-Us";
  const options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  const formatter = new Intl.NumberFormat(locale, options);

  const [bookmark, setBookmark] = useState(false);
  const [modal, setModal] = useState({
    active: false,
    noreward: {
      amount: 999999999999,
      isChosen: false,
    },
    bamboo: {
      amount: 101,
      isChosen: false,
    },
    blackEdition: {
      amount: 64,
      isChosen: false,
    },
    mahogany: {
      amount: 0,
      isChosen: false,
    },
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [moneyRaised, setMoneyRaised] = useState(89914);
  const [backer, setBacker] = useState(5007);

  const bookmarkHandler = () => {
    setBookmark((prevState) => !prevState);
  };
  const togleModalHandler = () => {
    setModal({
      ...modal,
      active: !modal.active,
      noreward: {
        ...modal.noreward,
        isChosen: false,
      },
      bamboo: {
        ...modal.bamboo,
        isChosen: false,
      },
      blackEdition: {
        ...modal.blackEdition,
        isChosen: false,
      },
      mahogany: {
        ...modal.mahogany,
        isChosen: false,
      },
    });
  };
  const noRewardSelection = () => {
    setModal({
      ...modal,
      active: true,
      noreward: {
        ...modal.noreward,
        isChosen: true,
      },
      bamboo: {
        ...modal.bamboo,
        isChosen: false,
      },
      blackEdition: {
        ...modal.blackEdition,
        isChosen: false,
      },
      mahogany: {
        ...modal.mahogany,
        isChosen: false,
      },
    });
  };
  const bambooSelection = () => {
    setModal({
      ...modal,
      active: true,
      noreward: {
        ...modal.noreward,
        isChosen: false,
      },
      bamboo: {
        ...modal.bamboo,
        isChosen: true,
      },
      blackEdition: {
        ...modal.blackEdition,
        isChosen: false,
      },
      mahogany: {
        ...modal.mahogany,
        isChosen: false,
      },
    });
  };
  const blackEditionSelection = () => {
    setModal({
      ...modal,
      active: true,
      noreward: {
        ...modal.noreward,
        isChosen: false,
      },
      bamboo: {
        ...modal.bamboo,
        isChosen: false,
      },
      blackEdition: {
        ...modal.blackEdition,
        isChosen: true,
      },
      mahogany: {
        ...modal.mahogany,
        isChosen: false,
      },
    });
  };
  const mahoganySelection = () => {
    setModal({
      ...modal,
      active: true,
      noreward: {
        ...modal.noreward,
        isChosen: false,
      },
      bamboo: {
        ...modal.bamboo,
        isChosen: false,
      },
      blackEdition: {
        ...modal.blackEdition,
        isChosen: false,
      },
      mahogany: {
        ...modal.mahogany,
        isChosen: true,
      },
    });
  };
  const bambooAmountReduction = () => {
    setModal({
      ...modal,
      bamboo: {
        amount: modal.bamboo.amount -= 1,
        isChosen: false,
      }
    })
  }
  const blackEditionAmountReduction = () => {
    setModal({
      ...modal,
      blackEdition: {
        amount: modal.blackEdition.amount -= 1,
        isChosen: false,
      }
    })
  }
  const successToggleHandler = () => {
    setIsSuccess((prevState) => !prevState);
  };
  const newBackerHandler = (amount) => {
    setBacker((prevState) => prevState+=1);
    setMoneyRaised((prevState) => (prevState += amount));
  };

  return (
    <main className={classes.main}>
      <div className={classes.company}>
        <img
          src={LogoMastercraft}
          alt="Logo of Mastercraft"
          className={classes.company__logo}
        />
        <h1 className={classes.company__title}>
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className={classes.company__description}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className={classes.company__row}>
          <PrimaryButton onClick={togleModalHandler}>
            Back this project
          </PrimaryButton>
          <BookmarkButton active={bookmark} onClick={bookmarkHandler}>
            {bookmark ? "Bookmarked" : "Bookmark"}
          </BookmarkButton>
        </div>
      </div>
      <div className={classes.stat}>
        <div className={classes.stat__row}>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>
              ${formatter.format(moneyRaised)}
            </p>
            <p className={classes.stat__info}>of $100,000 backed</p>
          </div>
          <div className={classes.stat__line}></div>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>{formatter.format(backer)}</p>
            <p className={classes.stat__info}>total backers</p>
          </div>
          <div className={classes.stat__line}></div>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>56</p>
            <p className={classes.stat__info}>days left</p>
          </div>
        </div>

        <div className={classes.stat__pourcent}>
          <div
            className={classes.stat__fill}
            style={{
              width: `${moneyRaised / 1000}%`,
            }}
          ></div>
        </div>
      </div>

      <div className={classes.project}>
        <h2 className={classes["project__heading--1"]}>About this project</h2>

        <p className={classes.project__description}>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className={classes.project__description}>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <div className={classes.pledge}>
          <div className={classes.pledge__row}>
            <h3 className={classes.pledge__heading}>Bamboo Stand</h3>
            <button className={classes["pledge__button--amount"]}>
              Pledge $25 or more
            </button>
          </div>
          <p className={classes.pledge__description}>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>{modal.bamboo.amount}</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
            <PrimaryButton onClick={bambooSelection}>
              Select Reward
            </PrimaryButton>
          </div>
        </div>
        <div className={classes.pledge}>
          <div className={classes.pledge__row}>
            <h3 className={classes.pledge__heading}>Black Edition Stand</h3>
            <button className={classes["pledge__button--amount"]}>
              Pledge $75 or more
            </button>
          </div>
          <p className={classes.pledge__description}>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>{modal.blackEdition.amount}</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
            <PrimaryButton onClick={blackEditionSelection}>
              Select Reward
            </PrimaryButton>
          </div>
        </div>
        <div className={`${classes.pledge} ${classes.disabled}`}>
          <div className={classes.pledge__row}>
            <h3 className={classes.pledge__heading}>
              Mahogany Special Edition
            </h3>
            <button className={classes["pledge__button--amount"]}>
              Pledge $200 or more
            </button>
          </div>
          <p className={classes.pledge__description}>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className={classes.pledge__row}>
            <div className={classes.pledge__group}>
              <p className={classes.pledge__amount}>0</p>
              <p className={classes["pledge__amount--text"]}>left</p>
            </div>
            <PrimaryButton className={classes["disabled__button"]}>
              Out of stock
            </PrimaryButton>
          </div>
        </div>
      </div>
      {modal.active && (
        <Modal
          noRewardSelection={noRewardSelection}
          bambooSelection={bambooSelection}
          blackEditionSelection={blackEditionSelection}
          mahoganySelection={mahoganySelection}
          modal={modal}
          onClose={togleModalHandler}
          onSuccess={successToggleHandler}
          newBackerHandler={newBackerHandler}
          bambooAmountReduction={bambooAmountReduction}
          blackEditionAmountReduction={blackEditionAmountReduction}
        />
      )}
      {isSuccess && <ModalSuccess onClick={successToggleHandler} />}
    </main>
  );
};

export default Main;
