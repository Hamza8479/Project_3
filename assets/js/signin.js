const signinForm = document.getElementById('formsignin');

signinForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const emailField = document.getElementById('emailField').value;
  const pswField = document.getElementById('pswField').value;

  const userList = JSON.parse(localStorage.getItem('users'));

  if (!userList) {
    alert('Please create an account first');
    window.location.href = '/pages/signup/signup.html';
    return;
  }
  const user = userList.find((user) => user.email === emailField);

  if (!user) {
    alert('Please create an account first');
    window.location.href = '/pages/signup/signup.html';
    return;
  }

  if (user.password !== pswField) {
    alert('Invalid email or password');
    return;
  }

  alert('Thank you for loggin in');
  window.location.href = '/pages/dashboard/dashboard.html';
}
