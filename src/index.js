import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Product from './components/product'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/app';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root'));

root.render(<App/>);

