const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const users = [
  { email: "mail@mail.dk", password: "user123" },
  { email: "bob@mail.dk", password: "bob123" },
  { email: "hej@mail.dk", password: "hej123" },
];

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.href = "pages/temperature.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
