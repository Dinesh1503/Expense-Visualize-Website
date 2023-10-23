import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Table from './components/Data';
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path = "/*" element = {<App/>}/>
       <Route path = "/Register" element = {<Register/>}/>
       <Route path = "/Login" element = {<Login/>}/>
       <Route path = "/Dashboard/:username" element = {<Dashboard/>}/>
       <Route path = "/Table/:username" element = {<Table/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
