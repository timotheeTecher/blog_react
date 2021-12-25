//Libraries
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Accueil</h1>
      <Link to="/articles/1">Voir mon article</Link>
      <Link 
        to={{
          pathname: "/articles/1",
          // hash: "#projets"
          // search: "?order=new"
        }} 
        style={{marginLeft: "15px"}}
        state={{fromHome: true}}>
          Lien vers une ancre
      </Link>
    </>
  );
}

export default Home;