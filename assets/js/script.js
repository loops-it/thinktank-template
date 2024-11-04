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



  


