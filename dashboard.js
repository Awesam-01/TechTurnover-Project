// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBy6bSRkUvGmCwlQt6-vn3Eu8UpRcV2n9E",
authDomain: "techturnover-1b9a4.firebaseapp.com",
projectId: "techturnover-1b9a4",

storageBucket: "techturnover-1b9a4.firebasestorage.app",
messagingSenderId: "774422758226",
appId: "1:774422758226:web:9e190b7a2e60cb65feb08b"
};

// Initialize Firebase (Ensure this is done only once)
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app); // Pass `app` to avoid re-initialization

    const user = localStorage.getItem("user");

    if (user) {
        try {
            // Parse JSON and extract the email
            const parsedUser = JSON.parse(user);
            const userEmail = parsedUser.email ;

            // Display email
            document.getElementById("user-display").textContent = userEmail;
        } catch (error) {
            console.error("Error parsing user data:", error);
            document.getElementById("user-display").textContent = "no email";
        }
    } else {
        // No user data found
        document.getElementById("user-display").textContent = "no email";
        console.warn("No user object found in localStorage.");
    }

// function that fetches data and display it
async function getData() {
    const container = document.getElementById('scrollable-container'); //first thing is we try to get a reference to an HTML element with the ID "oppo-container".
    container.innerHTML = "";

    try{
        const refurbishedCollection = collection(database, "Refurbished"); //we are fetching data from collection called oppo from my firebase database
        // snapshot is like a screenshot of all the documents held from the Oppo collection at the moment
        const snapshot = await getDocs(refurbishedCollection); // we retrieve all documents from the Oppo collection in Firestore.
        snapshot.forEach(doc => { // helps you to loop through the documents inside the snapshot
            const data = doc.data();
            console.log(data)
             // Create card element
             const card = document.createElement("div"); //we create a div class
            card.classList.add("image-card"); //inside the div created we add a card

             // Create link
             const link = document.createElement("b");
            link.href = data.pageUrl || "#"; // Default to "#" if no URL

             // Create image div
             const imgDiv = document.createElement("div"); //create a div
            imgDiv.classList.add("oppo-img"); // inside the div created, we add a class called oppo img to store our device image
            imgDiv.style.backgroundImage = `url(${data.image_url})`;
            imgDiv.style.height = "180px"; // Add height dynamically
            imgDiv.style.backgroundSize = "cover"; // Ensure the image covers the area
            imgDiv.style.backgroundPosition = "center"; // Center the image

             // Create name paragraph
             const name = document.createElement("p"); // a paragraph
            name.classList.add("device-name"); // the paragraph has a class named oppo name
            name.textContent = data.name;

            link.addEventListener('click', () => {
        // Save object to localStorage
        localStorage.setItem('selectedPhone', JSON.stringify(data));
        // Navigate to the new page
        window.location.href = `./details.html`
            })
            // Append elements
            // a child is an element that is directly nested inside another element.

            link.appendChild(imgDiv);  // Adds an image container to the link
            card.appendChild(link);    // Adds the link (with image) to the card
            card.appendChild(name);    // Adds the phone name to the card
            container.appendChild(card); // Adds the completed card to the container
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call function once
getData();