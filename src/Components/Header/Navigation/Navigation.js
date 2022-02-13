//Libraries
import React from "react";
import classes from './Navigation.module.css';
import routes from "../../../config/routes";
import fire from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = props => {

  const navigation = useNavigate();

  //Method
  const logOutClickedHandler = () => {
    fire.auth().signOut();
    navigation(routes.HOME, {replace: false});
  }

  return (
    <ul className={classes.Navigation}>
      <NavigationItem to={routes.HOME}>Accueil</NavigationItem>
      <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
      <NavigationItem to={routes.CONTACT}>Contact</NavigationItem>
      {props.user ? <NavigationItem to={routes.MANAGE_ARTICLE}>Ajouter</NavigationItem> : null}
      {!props.user ? <NavigationItem to={routes.AUTHENTIFICATION}>Authentification</NavigationItem> : null}
      {props.user ? <button className={classes.logout} onClick={logOutClickedHandler}>Deconnexion</button> : null}
    </ul>
  );
}

export default Navigation;