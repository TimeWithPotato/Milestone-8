import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element : <div>Hello from react</div>
  },
  {
    path: '/about',
    element: <div>I'm in the about page</div>
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}>
    </RouterProvider>
  </React.StrictMode>,
)
