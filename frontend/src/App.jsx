import './App.css'
import {BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx';
import Signup from './pages/signup.jsx';
import Login from "./pages/login.jsx";
import ForgetPassword from "./pages/forgetPassword.jsx";
import ResestPassword from './pages/resetPassword.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>   
      <Route path='/forgotpassword' element={<ForgetPassword/>}/> 
      <Route path='/resetpassword/:id/:token' element={<ResestPassword/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;