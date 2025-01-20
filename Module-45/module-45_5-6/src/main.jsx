import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Posts from './Components/Posts/posts.jsx'
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx'
import Post from './Components/Post/Post.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/users',
        element: <Users />,
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: '/users/:userID',
        element:
          <>
            <ShowDetails />
          </>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
      },
      {
        path: '/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts />
      },
      {
        path: '/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
