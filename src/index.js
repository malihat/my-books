import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import {Provider} from "./context/books.js";

const elem = document.getElementById('root');
const root = ReactDOM.createRoot(elem);

root.render(
<Provider>
    <App />
</Provider>
);