import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
// import AppReview from './AppReview';
import AppProducts from './AppProducts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppReview /> */}
    <AppProducts />
  </React.StrictMode>
);


