import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import MovieListPage from './pages/MovieListPage.jsx';
import MainHeader from './layout/MainHeader.jsx';
import MovieDetails from './components/MovieDeails/MovieDetails.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MovieListPage />,
        children: [
          {
            index: true,
            element: <MainHeader />,
          },
          {
            path: ":movieId",
            element: <MovieDetails />,
          },
        ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bootstrap-wrapper">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
