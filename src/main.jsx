import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Pages

import Home from './routes/Home.jsx';
import Mycv from './routes/Mycv.jsx';
import Projects from './routes/Projects.jsx';
import Contact from './routes/Contact.jsx';
import Description from './routes/Description.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mycv",
        element: <Mycv />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/project/:id",
        element: <Description />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
