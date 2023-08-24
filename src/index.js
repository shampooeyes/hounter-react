import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
    apiKey: "AIzaSyD2STSrRmsMoOA0Vn8897y9Os5fuNfRsxc",
    authDomain: "hounter-bd9ba.firebaseapp.com",
    projectId: "hounter-bd9ba",
    storageBucket: "hounter-bd9ba.appspot.com",
    messagingSenderId: "677700000686",
    appId: "1:677700000686:web:2c186162e3f745f1ce863f"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

root.render(
    <App />
);

reportWebVitals();
