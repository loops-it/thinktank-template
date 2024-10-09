document.addEventListener('DOMContentLoaded', function () {
  console.log("Website loaded successfully.");
});

function toggleFields() {
  const individualFields = document.getElementById('individualFields');
  const organizationFields = document.getElementById('organizationFields');
  const toggleSwitch = document.getElementById('flexSwitchCheck');

  if (toggleSwitch.checked) {
    individualFields.style.display = 'none';
    organizationFields.style.display = 'block';
  } else {
    individualFields.style.display = 'block';
    organizationFields.style.display = 'none';
  }
}

function togglePasswordVisibility(passwordId, eyeIconId) {
  const passwordField = document.getElementById(passwordId);
  const eyeIcon = document.getElementById(eyeIconId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.src = "assets/img/EyeOpened.svg"; 
  } else {
    passwordField.type = "password";
    eyeIcon.src = "assets/img/EyeClosed.svg"; 
  }
}

document.getElementById('accountForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.querySelectorAll('.custom-input').forEach(input => input.classList.remove('is-invalid'));

  const accountType = document.getElementById('flexSwitchCheck').checked ? 'organization' : 'individual';

  const nameField = document.getElementById(accountType === 'individual' ? 'name' : 'orgContactName');
  const emailField = document.getElementById(accountType === 'individual' ? 'email' : 'orgEmail');
  const phoneField = document.getElementById(accountType === 'individual' ? 'phone' : 'orgPhone');
  const password = document.getElementById(accountType === 'individual' ? 'password' : 'orgPassword');
  const repeatPassword = document.getElementById(accountType === 'individual' ? 'repeatPassword' : 'orgRepeatPassword');

  if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
    setError(password, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
    valid = false;
  }

  if (password.value !== repeatPassword.value) {
    setError(repeatPassword, 'Passwords do not match.');
    valid = false;
  }

  if (!validateEmail(emailField.value)) {
    setError(emailField, 'Please enter a valid email address.');
    valid = false;
  }

  if (!validatePhoneNumber(phoneField.value)) {
    setError(phoneField, 'Phone number must be a 10-digit number.');
    valid = false;
  }

  if (!nameField.value.trim()) {
    setError(nameField, 'Name cannot be empty.');
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});

function setError(element, message) {
  const errorDiv = document.getElementById(element.id + 'Error');
  errorDiv.textContent = message;
  element.classList.add('is-invalid');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}
