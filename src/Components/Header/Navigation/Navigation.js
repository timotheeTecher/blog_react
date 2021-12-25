//Libraries
import React from "react";
import classes from './Navigation.module.css';
import routes from "../../../routes";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {  
  return (
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.HOME}>Accueil</NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
      <NavigationItem to={routes.ADD}>Ajouter</NavigationItem>
    </ul>
  );
}

export default Navigation;