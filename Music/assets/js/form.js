// Function to sign in with email and password
function signInWithEmailAndPassword(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Redirect or perform actions after sign-in
      window.location.href = 'index.html'; // Adjust as needed
    })
    .catch((error) => {
      console.error('Sign in error:', error);
      // Handle sign-in errors
    });
}

// Function to sign up with email and password
function signUpWithEmailAndPassword(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);
      // Optionally redirect or perform actions after sign-up
    })
    .catch((error) => {
      console.error('Sign up error:', error);
      // Handle sign-up errors
    });
}

// Event listeners for form submissions
document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  signInWithEmailAndPassword(email, password);
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  signUpWithEmailAndPassword(email, password);
});
