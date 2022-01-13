//Libraries
import React from "react";
import classes from "./Contact.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  //Methods
  const emailClickedHandler = () => {
    navigate("email");
  }
  const phoneClickedHandler = () => {
    navigate("telephone");
  }

  return (
    <>
      <h1>Contact</h1>
      <p className={classes.question}>Par quel moyen de contact souhaitez-vous échanger ?</p>
      <button onClick={emailClickedHandler} className={classes.button}>Email</button>
      <button onClick={phoneClickedHandler} className={classes.button}>Téléphone</button>

      <Outlet/>
    </>
  );
}

export default Contact;