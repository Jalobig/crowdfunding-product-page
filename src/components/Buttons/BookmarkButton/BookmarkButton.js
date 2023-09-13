import React from "react";
import classes from "./BookmarkButton.module.scss";
import IconBookmark from "../../../images/icon-bookmark.svg";
import IconBookmarked from "../../../images/bookmark.svg";

const BookmarkButton = (props) => {
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
      {props.children}
    </button>
  );
};

export default BookmarkButton;
