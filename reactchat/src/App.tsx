import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )

);

const App = () => {
  return <RouterProvider router={router} />;
};


// function App() {


//   return (
//     <>

//     </>;
//   )
// }

export default App;
