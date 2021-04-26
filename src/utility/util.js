export const signupValidate = (email, pass, fname) => {
  // console.log('hi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  let isValidate = false;
  let mailFormat = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  let message = '';
  if (fname === '') {
    message = 'please enter your full name!';
  } else if (email === '') {
    message = 'please enter your email address!';
  } else if (!mailFormat.test(email)) {
    isValidate = false;
    message = 'Please enter valid email address.';
  } else if (pass === '') {
    message = 'please enter your password!';
  } else if (pass.length < 5) {
    isValidate = false;
    message = 'Please add at least 5 charachter.';
  } else {
    return true;
  }

  if (isValidate === false) {
    alert(message);
  }
};

export const loginValidate = (email, pass) => {
  let isValidate = false;
  let mailFormat = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
  );
  let message = '';
  if (email === '') {
    message = 'please enter your email address!';
  } else if (!mailFormat.test(email)) {
    isValidate = false;
    message = 'Please enter valid email address.';
  } else if (pass === '') {
    message = 'please enter your password!';
  } else if (pass.length < 5) {
    isValidate = false;
    message = 'Please add at least 5 charachter.';
  } else {
    return true;
  }

  if (isValidate === false) {
    alert(message);
  }
};
