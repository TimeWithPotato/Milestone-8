import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Components/Home/Home'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefullForm from './Components/StatefullForm/StatefullForm'
import RefForm from './Components/RefForm/RefForm'
import HookForm_array from './Components/HookForm/HookForm_array'
import HookForm_obj from './Components/HookForm/HookForm_obj'
import ReusableForm from './Components/ReusableForm/ReusableForm'

function App() {

  const handleUpdateProfile = data => {
    console.log("form updated.. ", " name: ", data.name, " ", "email: ", data.email, " ", "password: ", data.password);
  }
  const handleSignUp = data => {
    console.log("form updated.. ", " name: ", data.name, " ", "email: ", data.email, " ", "password: ", data.password);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/simpleform',
          element: <SimpleForm />,
        },
        {
          path: '/statefullform',
          element: <StatefullForm />
        },
        {
          path: '/refform',
          element: <RefForm />
        },
        {
          path: '/hookformarray',
          element: <HookForm_array />
        },
        {
          path: '/hookformobj',
          element: <HookForm_obj />
        },
        {
          path: '/updateprofile',
          element: <ReusableForm formTitle={"Update Profile"} handleSubmit={handleUpdateProfile} submitBtnText={"Update"}  />
        },
        {
          path: '/signup',
          element: <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUp} />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
