import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import NewChat from "./pages/NewChat";
import Chat from "./pages/Chat";


const router= createBrowserRouter([{
  path:"/",
  element:<RootLayout/>,errorElement:<ErrorPage/>,children:[
    {index:true, element:<NewChat/>},
    {path:"chat/:id", element:<Chat/>}
  ]
}
])
const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
