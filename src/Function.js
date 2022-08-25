export function image(FileName) {
  return process.env.PUBLIC_URL + '/images/' + FileName + '.png';
}

export const InputValueSignup = inputValues => {
  return (
    inputValues.username.includes('@') &&
    inputValues.password.length >= 4 &&
    inputValues.password.length <= 10 &&
    inputValues.name.length > 2 &&
    birthValidation(inputValues.birth) &&
    inputValues.contact.length >= 10 &&
    inputValues.address.length >= 12
  );
};

const birthValidation = _inputBirth => {
  let Birth_exp = /^(\(?\+?[0-9]*\)?)?[0-9_\- ]*$/;
  let year = Number(_inputBirth.substring(0, 4));
  let month = Number(_inputBirth.substring(4, 6));
  let day = Number(_inputBirth.substring(6, 8));
  let today = new Date();
  let yearNow = today.getFullYear();

  if (_inputBirth === undefined) {
    return false;
  } else if (_inputBirth.length !== 8 || !Birth_exp.test(_inputBirth)) {
    return false;
  } else if (1900 > year || year > yearNow) {
    return false;
  } else if (month < 1 || month > 12) {
    return false;
  } else if (day < 1 || day > 31) {
    return false;
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    day === 31
  ) {
    return false;
  } else if (month === 2) {
    const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    if (day > 29 || (day === 29 && !leapYear)) {
      return false;
    }
  }
  return true;
};
