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
import Division1 from './pages/Division1';
import Division2 from './pages/Division2';
import Division3 from './pages/Division3';
import Division4 from './pages/Division4';


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
  {
    path: "/Division1",
    element: <Division1/>,
  },
  {
    path: "/Division2",
    element: <Division2/>,
  },
  {
    path: "/Division3",
    element: <Division3 />,
  },
  {
    path: "/Division4",
    element: <Division4/>,
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
