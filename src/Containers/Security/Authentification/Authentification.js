//Libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../config/routes";
import { checkValidity } from "../../../shared/utlity";
import fire from "../../../config/firebase";
import classes from "./Authentification.module.css";

//Components
import Input from "../../../Components/UI/Input/Input";

const Authentification = () => {
  //States
  const [inputs, setInputs] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Email"
      },
      value: "",
      label: "Adresse mail",
      isValid: false,
      validation: {
        required: true,
        email: true,
        invalidMessage: ""
      },
      focused: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Mot de passe"
      },
      value: "",
      label: "Mot de passe",
      isValid: false,
      validation: {
        required: true,
        minLength: 6,
        invalidMessage: ""
      },
      focused: false
    }
  });

  const [formValidity, setFormValidity] = useState(false);

  const navigation = useNavigate();

  //Methods 
  const inputChangedHandler = (event, id) => {
    const newInputs = {...inputs};
    newInputs[id].value = event.target.value;
    newInputs[id].isValid = checkValidity(newInputs[id].value, newInputs[id].validation);
    newInputs[id].focused = true;
    setInputs(newInputs);
    let formIsValid = true;
    for (let input in newInputs) {
      formIsValid = newInputs[input].isValid && formIsValid;
    }
    setFormValidity(formIsValid);
  };

  const registerClickedHandler = () => {
    const user = {
      email: inputs.email.value,
      password: inputs.password.value
    }

    fire
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch(error => {
        console.log(error);
      });

    // navigation(routes.HOME, {replace: false});
  }

  const loginClickedHandler = () => {
    const user = {
      email: inputs.email.value,
      password: inputs.password.value
    }

    console.log(user);

    navigation(routes.HOME, {replace: false});
  }

  const formHandler = event => {
    event.preventDefault();
  }


  //Variables 
  const formElementsArray = [];
  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key]
    });
  }

  let form = (
    <form onSubmit={e => formHandler(e)}>
      {formElementsArray.map(formElement => (
        <Input 
          key={formElement.id}
          id={formElement.id}
          value={formElement.config.value}
          label={formElement.config.label}
          type={formElement.config.elementType}
          isValid={formElement.config.isValid}
          invalidMessage={formElement.config.validation.invalidMessage}
          focused={formElement.config.focused}
          config={formElement.config.elementConfig}
          changed={e => inputChangedHandler(e, formElement.id)}
        />
      ))}
      <div className={classes.submit}>
        <button onClick={registerClickedHandler} disabled={!formValidity}>Inscription</button>
        <button onClick={loginClickedHandler} disabled={!formValidity}>Connexion</button>
      </div>
    </form>
  );
  
  return (
    <>
      <h1>Authentification</h1>
      <div className={classes.form}>
        {form}
      </div>
    </>
  );
}

export default Authentification;