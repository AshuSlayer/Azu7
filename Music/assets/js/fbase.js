// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword as signIn, createUserWithEmailAndPassword as signUp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8wK1d72_FLa6kwvFaAp7gSKRcY2JENE",
  authDomain: "rock-politics-a5d5e.firebaseapp.com",
  projectId: "rock-politics-a5d5e",
  storageBucket: "rock-politics-a5d5e.appspot.com",
  messagingSenderId: "325558841756",
  appId: "1:325558841756:web:f97c3b608e8ee40b2dd859",
  measurementId: "G-50W5XEP4L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to sign in with email and password
function signInWithEmailAndPassword(email, password) {
  signIn(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Redirect or perform actions after sign-in
      window.location.href = 'index.html'; // Adjust as needed
    })
    .catch((error) => {
      console.error('Sign in error:', error.message);
      // Handle sign-in errors
      alert(error.message); // Display error to user
    });
}

// Function to sign up with email and password
function signUpWithEmailAndPassword(email, password) {
  signUp(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);
      // Optionally redirect or perform actions after sign-up
      // For example, display a success message to the user
      alert('Successfully signed up! Please sign in.');
      // Clear sign-up form fields (optional)
      document.getElementById('signUpForm').reset();
    })
    .catch((error) => {
      console.error('Sign up error:', error.message);
      // Handle sign-up errors
      alert(error.message); // Display error to user
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
