function validateName(value: string) {
  console.log('name', value)
  var re = /^([a-zA-Z ]){2,30}$/
  return re.test(value);
}

function validateEmail(value: string) {
  console.log('email', value)
  var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(value);
}

export { validateName, validateEmail }