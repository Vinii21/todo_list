import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './Context/Context';
import { ProviderCategories } from "./Context/ContextCategories";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider><ProviderCategories><App /></ProviderCategories></Provider>);
