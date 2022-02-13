//Libraries
import React from "react";
import classes from './Layout.module.css';

//Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Layout = props => {
  return (
    <div className={classes.Layout}>
      <Header user={props.user}/>

      <div className={classes.content}>
        {props.children}
      </div>
      
      <Footer />
    </div>
  );
}

export default Layout