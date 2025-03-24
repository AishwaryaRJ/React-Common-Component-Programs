localStorage.setItem("token", userData.token);


// Retrieve the token during app initialization:

const token = localStorage.getItem("token");
if (token) {
  // Decode token and set user data
  setUser(decodedToken);
}