//Libraries
import React from "react";
import classes from './Header.module.css';

//Components
import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={["container", classes.flex].join(' ')}>
        <div className={classes.logo}>
          MyBLOG
        </div>
        <nav>
          <Navigation/>
        </nav>
      </div>
    </header>
  );
}

export default Header;