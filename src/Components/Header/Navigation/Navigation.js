//Libraries
import React from "react";
import classes from './Navigation.module.css';
import routes from "../../../config/routes";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {  
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.HOME}>Accueil</NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
      <NavigationItem to={routes.MANAGE_ARTICLE}>Ajouter</NavigationItem>
      <NavigationItem to={routes.AUTHENTIFICATION}>Authentification</NavigationItem>

    </ul>
  );
}

export default Navigation;