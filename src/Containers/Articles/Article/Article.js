//Libraries
import React, { useState, useEffect } from "react";
import axios from "../../../config/axios-firebase";
import { useParams, useNavigate, Link } from "react-router-dom";
import classes from "./Article.module.css";
import routes from "../../../config/routes";

const Article = props => {
  //State
  const [article , setArticle] = useState({});

  //URL parameter
  const { slug } = useParams();

  //Navigate
  const navigation = useNavigate();

  // componentDidMount
  useEffect(() => {
    axios.get(`/articles.json?orderBy="slug"&equalTo="${slug}"`).then(response => {

      if (Object.keys(response.data).length === 0) {
        navigation(routes.HOME, {replace: false});
      }

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
    props.user.getIdToken().then(token => {
      axios.delete(`/articles/${article.id}.json?auth=${token}`).then(response => {
        navigation(routes.HOME, {replace: true});
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <h1>{article.title}</h1>

      <div className={classes.content}>
        <div className={classes.lead}>
          {article.catchphrase}
        </div>
        {article.content}
        { props.user ?
          <div className={classes.button}>
            <Link to={routes.MANAGE_ARTICLE} state={{article: article}}>
              <button className={classes.edit}>Modifier</button>
            </Link>
            <button className={classes.delete} onClick={deleteClickedHandler}>Supprimer l'article</button>
          </div>
          :
          null
        }
      </div>

      <div className={classes.author}>
        <b>{article.author}</b>
        <span>Publié le {date}</span>
        {article.draft === true ? <span className={classes.badge}>Brouillon</span> : null}
      </div>
    </div>
  );
}

export default Article;