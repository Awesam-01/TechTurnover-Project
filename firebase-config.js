import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
//Firebase Config (Initialize only ONCE)
 const firebaseConfig = {
     apiKey: "AIzaSyBy6bSRkUvGmCwlQt6-vn3Eu8UpRcV2n9E",
     authDomain: "techturnover-1b9a4.firebaseapp.com",
     projectId: "techturnover-1b9a4",
     storageBucket: "techturnover-1b9a4.appspot.com",
     messagingSenderId: "774422758226",
     appId: "1:774422758226:web:9e190b7a2e60cb65feb08b"
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)
 export {db, collection, addDoc, setDoc}