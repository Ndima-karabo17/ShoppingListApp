//import './App.css'


import { BrowserRouter, Route, Routes } from "react-router"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Privacy from "./pages/Privacy"
import Catelog from "./pages/Catelog"

function App() {


  return (
    <>
    <BrowserRouter>
   
      <Routes>
    <Route path="/" index ></Route>
    <Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/home" element= {<Home/>}/>
<Route path="/catelog" element={<Catelog/>}/>
<Route path="/privacy" element={<Privacy/>}/>
      </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
