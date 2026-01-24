import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import {createBrowserRouter,RouterProvider} from "react-router"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      {/* outlet is fillet with which is needed */}
      <Outlet></Outlet>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
 {
    path:"/about",
    element:<About></About>
  },
   {
    path:"/contact",
    element:<Contact></Contact>
  },
  {
    path:"/restaurantmenu/:resId",
    element:<RestaurantMenu></RestaurantMenu>
  }
    ],
    errorElement:<Error></Error>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
