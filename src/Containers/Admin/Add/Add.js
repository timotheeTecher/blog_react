//Libraries
import React, { useState } from "react";
import classes from "./Add.module.css";
import axios from "../../../config/axios-firebase";
import { useNavigate } from "react-router-dom";
import routes from "../../../config/routes";

//Components
import Input from "../../../Components/UI/Input/Input";

const Add = () => {
  //States
  const [inputs, setInputs] = useState({
    title: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Titrle de l'article"
      },
      value: "",
      label: "Titre",
      isValid: false,
      validation: {
        required: true,
        minLength: 5,
        maxLength: 85,
        invalidMessage: ""
      },
      focused: false
    },
    catchphrase: {
      elementType: "textarea",
      elementConfig: {},
      value:"",
      label: "Accroche de l'article",
      isValid: false,
      validation: {
        required: true,
        minLength: 10,
        maxLength: 200,
        invalidMessage: ""
      },
      focused: false
    },
    content: {
      elementType: "textarea",
      elementConfig: {},
      value:"",
      label: "Contenu de l'article",
      isValid: false,
      validation: {
        required: true,
        invalidMessage: ""
      },
      focused: false
    },
    author: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Auteur de l'article"
      },
      value: "",
      label: "Auteur",
      isValid: false,
      validation: {
        required: true,
        invalidMessage: ""
      },
      focused: false
    },
    draft: {
      elementType: "select",
      elementConfig: {
        options: [
          {value: true, displayValue: "Brouillon"},
          {value: false, displayValue: "Publié"}
        ]
      },
      value: true,
      label: "État",
      isValid: true,
      validation: {}
    }
  });

  const [formValidity, setFormValidity] = useState(false);
  
  const navigation = useNavigate();

  //Methods 
  const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "";
      if (!isValid) {
        rules.invalidMessage = "Ce champ de texte doit être rempli !";
        return isValid;
      }
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
      if (!isValid) {
        rules.invalidMessage = `Ce champ doit contenir au minimum ${rules.minLength} caractères`;
        return isValid;
      }
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength;
      if (!isValid) {
        rules.invalidMessage = `Ce champ doit contenir au maximum ${rules.maxLength} caractères`;
        return isValid;
      }
    }
    return isValid;
  }

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

  const generateSlug = str => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
  
    return str;
  }

  const submittedFormHandler = event => {
    event.preventDefault();

    const slug = generateSlug(inputs.title.value);

    const newArticle = { 
      title: inputs.title.value,
      content: inputs.content.value,
      author: inputs.author.value,
      draft: inputs.draft.value,
      catchphrase: inputs.catchphrase.value,
      date: Date.now(),
      slug: slug
    }
    
    axios.post("/articles.json", newArticle).then(response => {
        console.log(response);
        navigation(routes.ARTICLES, {replace: true});
      }).catch(error => {
        console.log(error);
      });
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
    <form className={classes.Add} onSubmit={e => submittedFormHandler(e)}>
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
        <input type="submit" value="Ajouter un article" disabled={!formValidity}/> 
      </div>
    </form>
  );

  return (
    <div className="container">
      <h1>Ajouter un nouvel article</h1>
      {form}
    </div>
  );
}

export default Add;