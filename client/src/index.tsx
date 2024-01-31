import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import UpdateProduct from './page/updateProduct';
import Home from './page/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>deu ruim</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <div>deu ruim</div>
      },
      {
        path: '/updateProduct',
        element: <UpdateProduct />,
        errorElement: <div>deu ruim</div>,
      }
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
