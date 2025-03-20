import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6bSRkUvGmCwlQt6-vn3Eu8UpRcV2n9E",
  authDomain: "techturnover-1b9a4.firebaseapp.com",
  projectId: "techturnover-1b9a4",

  storageBucket: "techturnover-1b9a4.firebasestorage.app",
  messagingSenderId: "774422758226",
  appId: "1:774422758226:web:9e190b7a2e60cb65feb08b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app)




  const submit = document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    const email =  document.getElementById("email").value
const password =  document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
 
  .then((userCredential) => {
    // Signed up 
   
    const user = userCredential.user;
window.location.href="login-page.html"    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
 
  
  })