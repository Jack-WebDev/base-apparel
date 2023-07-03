
const email = document.getElementById('email');
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("form");
const errorIcon = document.getElementById("errorIcon");

validateInputs = () => {
  if (form.value == null) {
    errorIcon.classList.add("active");
    errorMessage.classList.add("active");
  }

  setTimeout(() => {
    errorIcon.classList.remove("active");
    errorMessage.classList.remove("active");
  }, 3000);
};

validateEmail = () => {
  if(!email) {
    errorIcon.classList.add("active");
    errorMessage.classList.add("active");
  }

  setTimeout(() => {
    errorIcon.classList.remove("active");
    errorMessage.classList.remove("active");
  }, 3000);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  validateEmail();
});
