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
    axios.get('/articles.json?orderBy="date"&limitToLast=3').then(response => {
        const articlesArray = [];
        for (let key in response.data) {
          articlesArray.push({
            ...response.data[key],
            id: key
          });
        }
        articlesArray.reverse();
        setArticles(articlesArray);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1>Accueil</h1>
      <DisplayedArticles articles={articles}/>
      <Link className={classes.link} to={routes.ARTICLES}>Voir toules articles</Link>
    </>
  );
}

export default Home;