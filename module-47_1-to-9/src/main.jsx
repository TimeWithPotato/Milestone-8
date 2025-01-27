import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
        loader: ()=>fetch('../public/featuredJobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails />,
        loader: ()=>fetch('../public/featuredJobs.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-full'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
