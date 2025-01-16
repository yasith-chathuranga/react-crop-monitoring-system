import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
import {Error} from "./pages/Error.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Staffs} from "./pages/Staffs.tsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {path: '/', element: <Dashboard/>},
        {path: '/staffs', element: <Staffs/>},
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
