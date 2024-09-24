import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Home from './page/home/index';
// import Signin from './page/login/signin';
// import Signup from './page/login/signup';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      {/* <Signin /> */}
      {/* <Signup /> */}
    </BrowserRouter>
  </React.StrictMode>
);
