const signupForm = document.getElementById('formsignup');

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

signupForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const nameField = document.getElementById('nameField').value;
  const emailField = document.getElementById('emailField').value;
  const pswField = document.getElementById('pswField').value;
  const pswRepeatField = document.getElementById('pswRepeatField').value;

  let userList = JSON.parse(localStorage.getItem('users')) || [];

  if (userList.find((user) => user.email === emailField)) {
    alert('Email already in use');
    emailRegex.innerHTML = '';
    return;
  }

  if (!nameField.trim().length > 0) {
    alert('Name should be valid');
    nameField.value = '';
    return;
  }

  if (!emailRegex.test(String(emailField).toLowerCase())) {
    alert('Email should be valid');
    emailRegex.value = '';
    return;
  }

  if (!passwordRegex.test(pswField)) {
    alert('Password must be strong and atleast 8 characters long');
    pswField.innerHTML = '';
    return;
  }

  if (pswField !== pswRepeatField) {
    alert('Password must match');
    pswField.value = '';
    pswRepeatField.value = '';
    return;
  }

  const userData = {
    name: nameField,
    email: emailField,
    password: pswField,
  };
  userList = [userData, ...userList];
  localStorage.setItem('users', JSON.stringify(userList));

  alert('Account is successfully created');
  window.location.href = '/pages/signin/signin.html';
}
