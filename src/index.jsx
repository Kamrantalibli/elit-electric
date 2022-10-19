import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './scss/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
