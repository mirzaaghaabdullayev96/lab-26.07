const URLusers = "https://fakestoreapi.com/users";

let logInInput = document.getElementById("my-input-login");
let logInPassword = document.getElementById("my-input-password");
let logInBtn = document.getElementById("log-in-btn");

logInBtn.addEventListener("click", () => {
  fetch(URLusers)
    .then((res) => res.json())
    .then((users) => {
      let found = false;
      users.forEach((user) => {
        if (
          user.username == logInInput.value &&
          user.password == logInPassword.value
        ) {
          window.location.href = "../task2.html";
          found = true;
        }
      });
      if (found) {
        return;
      } else {
        alert("invalid user");
      }
    });
});
