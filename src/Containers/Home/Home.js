//Libraries
import React, { useState, useEffect } from "react";
import axios from "../../config/axios-firebase";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import classes from "./Home.module.css";

//Components
import DisplayedArticles from "../../Components/DisplayedArticles/DisplayedArticles";

const Home = () => {
  //States
  const [articles, setArticles] = useState([]);

  //ComponentDidMount
  useEffect(() => {
    axios.get('/articles.json').then(response => {
      
      let articlesArray = [];

      for (let key in response.data) {
        articlesArray.push({
          ...response.data[key],
          id: key
        });
      }

      //Chronology
      articlesArray.reverse();

      //Sort
      articlesArray = articlesArray.filter(article => article.draft === "false");

      //LimitTo3
      articlesArray = articlesArray.slice(0, 3);

      setArticles(articlesArray);

    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <h1>Accueil</h1>
      <DisplayedArticles articles={articles}/>
      <Link className={classes.link} to={routes.ARTICLES}>
        Voir toules articles &nbsp;
        <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </Link>
    </>
  );
}

export default Home;