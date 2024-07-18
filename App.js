import React, { lazy, Suspense, useState }  from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact"
import Menu from "./src/components/Menu";
import Error from "./src/components/Error"
import Cart from "./src/components/Cart";
import Login from "./src/components/Login";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// redux
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
function Layout(){
  console.log(appStore)
  const [dishes,setDishes]=useState([]);
    return (
    <div className="layout dark:bg-gray-900 min-h-[100vh] dark:text-white">
           <Provider store={appStore}>
                <Header/>
                <Outlet/>
                </Provider>
            </div>
          
          )
}
const Grocery=lazy(()=>import("./src/components/Grocery"));
const About=lazy(()=>import("./src/components/About"))
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Grocery is being loaded...</h1>}>
          <Grocery/>
        </Suspense> 
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/about",
        element:
        <Suspense fallback={<h1>About is being loaded...</h1>}>
          <About/>
        </Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/menu/:resId",
        element:<Menu/>
      },
      {
        path:"/login",
        element:<Login/>
      }
   
    ],
    errorElement:<Error/>,
  }
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)