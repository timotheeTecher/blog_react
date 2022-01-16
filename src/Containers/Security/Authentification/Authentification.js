//Libraries
import React, { useState } from "react";
import { checkValidity } from "../../../shared/utlity";
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
        invalidMessage: ""
      },
      focused: false
    }
  });

  const [formValidity, setFormValidity] = useState(false);

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

  //Variables 
  const formElementsArray = [];
  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key]
    });
  }

  let form = (
    <form>
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
        <button>Inscription</button>
        <button>Connexion</button>
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