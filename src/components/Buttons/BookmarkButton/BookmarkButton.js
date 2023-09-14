import React from "react";
import classes from "./BookmarkButton.module.scss";
import IconBookmark from "../../../images/icon-bookmark.svg";
import IconBookmarked from "../../../images/bookmark.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

const BookmarkButton = (props) => {
  const media = useMediaQuery("only screen and (max-width:600px)");

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${
        props.active ? classes.button__active : ""
      }`}
    >
      <img
        src={props.active ? IconBookmarked : IconBookmark}
        alt="BookMark Icon"
        className={classes.button__icon}
      />
      {!media && props.children}
    </button>
  );
};

export default BookmarkButton;
