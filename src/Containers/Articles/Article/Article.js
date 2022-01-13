//Libraries
import React, { useState, useEffect } from "react";
import axios from "../../../config/axios-firebase";
import { useParams, useNavigate, Link } from "react-router-dom";
import classes from "./Article.module.css";
import routes from "../../../config/routes";

const Article = () => {
  //State
  const [article , setArticle] = useState({});

  //URL parameter
  const { slug } = useParams();

  //Navigate
  const navigation = useNavigate();

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

  //Methods
  const deleteClickedHandler = () => {
    axios.delete(`/articles/${article.id}.json`).then(response => {
      navigation(routes.HOME, {replace: true});
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="container">
      <h1>{article.title}</h1>

      <div className={classes.content}>
        <div className={classes.lead}>
          {article.catchphrase}
        </div>
        {article.content}
        <div className={classes.button}>
          <Link to={routes.MANAGE_ARTICLE} state={{article: article}}>
            <button className={classes.edit} >Modifier</button>
          </Link>
          <button className={classes.delete} onClick={deleteClickedHandler}>Supprimer l'article</button>
        </div>
      </div>

      <div className={classes.author}>
        <b>{article.author}</b>
        <span>Publié le {date}</span>
      </div>
    </div>
  );
}

export default Article;