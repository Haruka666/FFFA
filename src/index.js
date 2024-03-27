import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Joueur from './pages/Joueur';
import Stats from './pages/Stats';
import Divisions from './pages/Divisions';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Joueur",
    element: <Joueur/>,
  },
  {
    path: "/Stats",
    element: <Stats/>,
  },
  {
    path: "/Divisions",
    element: <Divisions/>,
  },
  {
    path: "/Connexion",
    element: <Connexion/>,
  },
  {
    path: "/Inscription",
    element: <Inscription/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
