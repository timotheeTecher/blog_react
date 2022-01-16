export const checkValidity = (value, rules) => {
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

  if (rules.email) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value);
    if (!isValid) {
      rules.invalidMessage = `L'adresse mail n'est pas valide !`;
      return isValid;
    }
  }

  return isValid;
}