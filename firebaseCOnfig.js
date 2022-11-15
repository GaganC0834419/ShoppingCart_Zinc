// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCodakrj2t3Vjz-es3VMpgtdeLkFmIbyUY",
//   authDomain: "shopingapp-11936.firebaseapp.com",
//   projectId: "shopingapp-11936",
//   storageBucket: "shopingapp-11936.appspot.com",
//   messagingSenderId: "774428840662",
//   appId: "1:774428840662:web:b1934626c5e0bae417af77",
//   measurementId: "G-1YLXL2WNWF"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDYHufYoQXV8ntsPNv3FwAH0RARYKZxJhs",
  authDomain: "shoppingproject-c8380.firebaseapp.com",
  projectId: "shoppingproject-c8380",
  storageBucket: "shoppingproject-c8380.appspot.com",
  messagingSenderId: "470715624998",
  appId: "1:470715624998:web:355dd371c3a98ba043c0e7",
  measurementId: "G-LBR4NVJW5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app.firestore();