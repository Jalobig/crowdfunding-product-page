import React, { useState } from "react";
import classes from "./Main.module.scss";
import LogoMastercraft from "../../images/logo-mastercraft.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import BookmarkButton from "../../components/Buttons/BookmarkButton/BookmarkButton";

const Main = () => {
  const [bookmark, setBookmark] = useState(false);

  const bookmarkHandler = () => {
    setBookmark((prevState) => !prevState);
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
          <PrimaryButton>Back this project</PrimaryButton>
          <BookmarkButton active={bookmark} onClick={bookmarkHandler}>
            {bookmark ? "Bookmarked" : "Bookmark"}
          </BookmarkButton>
        </div>
      </div>
      <div className={classes.stat}>
        <div className={classes.stat__row}>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>$89,914</p>
            <p className={classes.stat__info}>of $100,000 backed</p>
          </div>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>5,007</p>
            <p className={classes.stat__info}>total backers</p>
          </div>
          <div className={classes.stat__column}>
            <p className={classes.stat__number}>56</p>
            <p className={classes.stat__info}>days left</p>
          </div>
        </div>

        <div className={classes.stat__pourcent}>
          <div className={classes.stat__fill}></div>
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
              <p className={classes.pledge__amount}>101</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
            <PrimaryButton>Select Reward</PrimaryButton>
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
              <p className={classes.pledge__amount}>64</p>
              <p className={classes["pledge__amount-text"]}>left</p>
            </div>
            <PrimaryButton>Select Reward</PrimaryButton>
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
    </main>
  );
};

export default Main;
