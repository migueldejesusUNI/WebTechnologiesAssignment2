import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Regions from './routes/Regions';
import Countries from './routes/Countries';
import Cities from './routes/Cities';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="Home" element={<Home /> } />
                <Route path="Regions" element={<Regions />} />
                <Route path="Countries/:regionId" element={<Countries />} />
                <Route path="Countries" element={<Countries />} />
                <Route path="Cities/:countryId" element={<Cities /> } />
                <Route path="" element={<Home />} /> {/*route for when the url is localhost:[port] */ }
                <Route path="*" element={<Home />} /> {/*route that matches anything */ }
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
