import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Components/Home/Home';
import SimpleForm from './Components/SimpleForm/SimpleForm';
import StatefullForm from './Components/StatefullForm/StatefullForm';
import RefForm from './Components/RefForm/RefForm';
import ReusableForm from './Components/ReusableForm/ReusableForm';
import HookForm__array from './Components/HookForms/HookForm__array';
import HookFrom__obj from './Components/HookForms/HookFrom__obj';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {

  const handleSignUp = (data) => {
    console.log("signUp... ",data.name)
  }
  const handleLogin = (data) => {
    console.log("Login... ",data.name)
  }
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
        },
        {
          path: '/hookformarray',
          element: <HookForm__array />
        },
        {
          path: '/hookformobj',
          element: <HookFrom__obj />
        },
        {
          path: '/signup',
          element: <ReusableForm key={'signUp'} formTitle={"SignUp"} handleSubmit={handleSignUp} submitBtnTxt={"signUp"} />
        },
        {
          path: '/login',
          element: <ReusableForm key={'login'} formTitle={"Login"} handleSubmit={handleLogin} />
        },
        {
          path: '/grandpa',
          element: <Grandpa />
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
