import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout';
import { About, Contact, Home, NotFound,Signin, Signup } from './Pages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/> 
      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App
