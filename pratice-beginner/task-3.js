let firstNameInput = document.querySelector('.fisrtName');
let lastNameInput = document.querySelector('.lastName');
let button = document.querySelector('.btn');
let fullNameDisplay = document.querySelector('.fullName');

let showFullName = function () {
  let firstNameInput = firstNameInput.value;
  let lastNameInput = lastNameInput.value;

  let fullName = `${firstNameInput} ${lastNameInput}`;
  fullNameDisplay.textContent = fullName;
};

button.addEventListener('click', showFullName);
