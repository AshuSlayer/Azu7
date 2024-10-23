// authcheck.js

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const auth = getAuth();

// Check if a user is authenticated
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If no user is authenticated, redirect to login
    window.location.href = 'fbase.html';
  } else {
    console.log("User is signed in:", user.email);
  }
});
