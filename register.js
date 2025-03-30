import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js"; //used to set up firebase in my project
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"; //functions inside firebase that creates a user with email and password
//import { db, setDoc, collection } from "./firebase-config.js"
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";

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
const db = getFirestore();



  const submit = document.getElementById("submit").addEventListener('click', async function(e){
    e.preventDefault();
    const email =  document.getElementById("email").value
    const phoneNumber =  document.getElementById("phone").value
const password =  document.getElementById("password").value
    const userCredential = createUserWithEmailAndPassword(auth, email, password)
 
  try{
    // Signed up 
   
    const user = userCredential.user;
        // Store user details in Firestore
      //   await setDoc(doc(db, "Users", user.uid), {
      //     email: email,
      //     phoneNumber: phoneNumber,
      //     createdAt: new Date()
      // });
window.location.href="index.html"    
  }
  catch(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }
 
  
  })