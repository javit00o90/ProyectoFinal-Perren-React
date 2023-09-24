import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdcdf6sknjIaGQ4kRozntctzLGo_-pWjk",
  authDomain: "proyectofinal-perren.firebaseapp.com",
  projectId: "proyectofinal-perren",
  storageBucket: "proyectofinal-perren.appspot.com",
  messagingSenderId: "24298879150",
  appId: "1:24298879150:web:271ba9ad4dd51035b2953f"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
