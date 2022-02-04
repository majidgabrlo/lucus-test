import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { RootState } from "./store/store";
import Button from "./components/Button";
import { useState } from "react";
import {FiMenu} from 'react-icons/fi'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { authenticated } = useSelector((state: RootState) => state.auth);

  if (authenticated) {
    return (
      <div className="grid grid-cols-12">
        <div className="flex md:hidden w-screen bg-green-800 text-white">
          <Button className='m-4' onClick={()=>setIsNavOpen(true)}>
            <FiMenu size={30} />
          </Button>
        </div>
        <Sidebar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        <div className="col-span-full md:col-span-8 lg:col-span-10 px-2 py-3">
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
