import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
import {Error} from "./pages/Error.tsx";
import {Dashboard} from "./pages/dashboard/Dashboard.tsx";
import {Staffs} from "./pages/staff/Staffs.tsx";
import {LogIn} from "./pages/login/LogIn.tsx";
import {SignUp} from "./pages/signup/SignUp.tsx";
import {Vehicles} from "./pages/vehicle/Vehicles.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {path: '/', element: <LogIn/>},
        {path: '/signup', element: <SignUp/>},
        {path: '/dashboard', element: <Dashboard/>},
        {path: '/staffs', element: <Staffs/>},
        {path: '/vehicles', element: <Vehicles/>},
      ]
    },
    {path: '*', element: <Error/>}
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
