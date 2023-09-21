import Home from "./pages"
import { createBrowserRouter,Route,RouterProvider,createRoutesFromElements} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={Home/>}/>
    </Route>
  )

)


function App() {


  return (
    <>

    </>;
  )
}

export default App
