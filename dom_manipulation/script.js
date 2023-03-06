// name
const name = document.getElementById("name");

// Hide the greeting initially
const greeting = document.getElementById("greeting");
greeting.style.display = "none";

// Get form Id
const form = document.getElementById("form-data");

// Name
const nameInput = document.getElementById("name-input");

// Submit Name event
const submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  // WHat we want to happen when button is clicked

  // Assign input value to name
  name.textContent = nameInput.value;

  // show the name
  greeting.style.display = "flex";

  // Hide form
  form.style.display = "none";
});

// Test for results in console
console.log(name.textContent);
console.log(nameInput.value);
