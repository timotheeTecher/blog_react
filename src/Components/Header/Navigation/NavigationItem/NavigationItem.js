//Libraries
import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavigationItem.module.css';

const NavigationItem = props => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.to} className={({isActive}) => (isActive ? classes.active : null)} >{props.children}</NavLink>
    </li>
  );
}

export default NavigationItem;