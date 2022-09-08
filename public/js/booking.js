function getRandom() {
  return Math.floor(Math.random() * 99999) + 1;
}

function login() {
  location.href = "/users/login";
}

function logout() {
  location.href = "/users/logout";
}
