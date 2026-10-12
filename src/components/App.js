import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productlist from "./Productlist";
import Productdetails from "./Productdetails";
import Admin from "./Admin";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <BrowserRouter>
    <Routes>
    <Route path="/Productlist" element={<Productlist/>} />
    <Route path="/Productdetails" element={<Productdetails/>} />
    <Route path="/Admin" element={<Admin/>} />
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
