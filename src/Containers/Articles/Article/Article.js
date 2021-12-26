//Libraries
import React, { useState, useEffect } from "react";
import axios from "../../../config/axios-firebase";
import { useParams } from "react-router-dom";
import classes from "./Article.module.css";

const Article = () => {
  //State
  const [article , setArticle] = useState({});
  const { slug } = useParams();

  // componentDidMount
  useEffect(() => {
    axios.get(`/articles.json?orderBy="slug"&equalTo="${slug}"`).then(response => {
      for (const key in response.data) {
        setArticle({
          ...response.data[key],
          id: key
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }, []);

  //Variables
  let date = new Date(article.date).toLocaleDateString(`fr-FR`);

  return (
    <div className="container">
      <h1>{article.title}</h1>

      <div className={classes.content}>
        <div className={classes.lead}>
          {article.catchphrase}
        </div>
        {article.content}
      </div>

      <div className={classes.author}>
        <b>{article.author}</b>
        <span>Publié le {date}</span>
      </div>
    </div>
  );
}

export default Article;