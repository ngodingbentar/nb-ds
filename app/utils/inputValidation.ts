function validateName(value: string) {
  var re = /^([a-zA-Z ]){2,30}$/
  return re.test(value);
}

function validateEmail(value: string) {
  var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(value);
}

export { validateName, validateEmail }