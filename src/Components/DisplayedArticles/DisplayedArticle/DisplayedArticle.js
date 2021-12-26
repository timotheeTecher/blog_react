//Libraries
import React from "react";
import classes from "./DisplayedArticle.module.css";
import routes from "../../../config/routes";
import { Link } from "react-router-dom";

const DisplayedArticle = props => {
  return (
    <Link className={classes.link} to={`${routes.ARTICLES}/${props.article.slug}`}>
      <div className={classes.DisplayedArticle}>
        <h2>{props.article.title}</h2>
        <p>{props.article.catchphrase}</p>
        <small>{props.article.author}</small>
      </div>
    </Link>
  );
}

export default DisplayedArticle;