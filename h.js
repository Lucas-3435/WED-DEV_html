console.log("External JS is connected!");

// Login validation
function validateLogin() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if (user === "" || pass === "") {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Login successful!");
  return true;
}

// Signup validation
function validateSignup() {
  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPass").value;
  let confirm = document.getElementById("signupConfirm").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Signup successful!");
  return true;
}
