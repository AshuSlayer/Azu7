// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAu8wK1d72_FLa6kwvFaAp7gSKRcY2JENE",
  authDomain: "rock-politics-a5d5e.firebaseapp.com",
  projectId: "rock-politics-a5d5e",
  storageBucket: "rock-politics-a5d5e.appspot.com",
  messagingSenderId: "325558841756",
  appId: "1:325558841756:web:f97c3b608e8ee40b2dd859",
  measurementId: "G-50W5XEP4L1"
};

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// Optionally include Firebase Analytics if needed
const analytics = firebase.analytics();

// Export Firebase auth for use in other modules
const auth = firebase.auth(); // Export auth for use in other modules
