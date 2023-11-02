import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegionCardList from './components/RegionCardList';
import CountryCardList from './components/CountryCardList';
import CityCardList from './components/CityCardList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="Regions" element={<RegionCardList />} />
                <Route path="Countries/:regionId" element={<CountryCardList />} />
                <Route path="Countries" element={<CountryCardList />} />
                <Route path="Cities/:countryId" element={<CityCardList />} />
                <Route path="" element={<RegionCardList />} /> {/*route for when the url is localhost:[port] */}
                <Route path="*" element={<RegionCardList />} /> {/*route that matches anything */ }
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
