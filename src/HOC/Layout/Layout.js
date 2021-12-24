//Libraries
import React from "react";
import classes from './Layout.module.css';

//Components
import Header from "../../Components/Header/Header";

const Layout = props => {
  return (
    <>
      <Header/>
      {props.children}
    </>
    
  );
}

export default Layout