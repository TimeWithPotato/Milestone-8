import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Components/Home/Home'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefullForm from './Components/StatefullForm/StatefullForm'
import RefForm from './Components/RefForm/RefForm'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/simpleform',
          element: <SimpleForm />
        },
        {
          path: '/statefullform',
          element: <StatefullForm />
        },
        {
          path: '/refform',
          element: <RefForm />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
