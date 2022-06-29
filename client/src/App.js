import React from "react";
import Navbar from "./widgets/Navbar"
import {  Route, Routes} from "react-router-dom";
import CompanyAdd from "./Components/CompanyAdd";
import Home from "./Components/Home"

function App(){
  return(
    <>
        <Navbar/>
          <Routes>
            <Route path='/company' element={<CompanyAdd />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/add' element={<AddEdit />} /> */}
         </Routes>
    </>
  )
}

export default App;
