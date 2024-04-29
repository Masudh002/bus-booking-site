import React from 'react'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Layout from './Components/Layout';
import { About, Contact, Home, NotFound, Register } from './Pages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/register' element={<Register/>}/>

        </Route>

        <Route path="*" element={<NotFound/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
