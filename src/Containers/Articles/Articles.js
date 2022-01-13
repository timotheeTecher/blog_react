//Libraries
import React, { useState, useEffect} from "react";
import axios from "../../config/axios-firebase";

//Components
import DisplayedArticles from "../../Components/DisplayedArticles/DisplayedArticles";

const Articles = () => {
  //States
  const [articles, setArticles] = useState([]);

  //ComponentDidMount
  useEffect(() => {
    axios.get("/articles.json").then(response => {

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

    
      setArticles(articlesArray);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <DisplayedArticles articles={articles}/>
    </>
  );
}

export default Articles;