//Libraries
import React from "react";
import classes from "./DisplayedArticle.module.css";

const DisplayedArticle = props => {
  return (
    <div className={classes.DisplayedArticle}>
      <h2>{props.article.title}</h2>
      <p>{props.article.catchphrase}</p>
      <small>{props.article.author}</small>
    </div>
  );
}

export default DisplayedArticle;