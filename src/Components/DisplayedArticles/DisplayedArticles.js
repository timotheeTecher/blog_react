//Libraries
import React from "react";
import classes from "./DisplayedArticles.module.css";

//Components
import DisplayedArticle from "./DisplayedArticle/DisplayedArticle";

const DisplayedArticles = props => {
  let articles = props.articles.map(article => (
    <DisplayedArticle key={article.id} article={article}/>
  ));

    return (
    <section className={`${classes.DisplayedArticles} container`}>
      {articles}
    </section>
  );
}

export default DisplayedArticles;