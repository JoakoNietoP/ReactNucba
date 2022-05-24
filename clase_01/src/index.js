import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ejemplo from './ejemplo';
import { EjemploFuncional, EjemploFuncional2 } from './ejemplofuncional';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ejemplo/>
    <EjemploFuncional texto={"Esto me llega por props0"}/>
    <EjemploFuncional texto={"Esto me llega por props1"}/>
    <EjemploFuncional texto={"Esto me llega por props2"}/>
    <EjemploFuncional texto={"Esto me llega por props3"}/>
    <EjemploFuncional2/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
