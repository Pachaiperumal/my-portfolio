// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtuESc4eNd-efby_Rg7iAAvbLuscs13v4",
    authDomain: "pachaiperumal.firebaseapp.com",
    projectId: "pachaiperumal",
    storageBucket: "pachaiperumal.firebasestorage.app",
    messagingSenderId: "1098670647900",
    appId: "1:1098670647900:web:7176058acd4db825ec5499",
    measurementId: "G-WTEQKZVWZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
