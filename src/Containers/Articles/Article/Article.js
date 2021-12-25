//Libraries
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Article = props => {
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <>
      <h1>Ma page article ({id})</h1>
      {state && state.fromHome ? <p>Cliqué depuis accueil</p> : null}
    </>
  );
}

export default Article;