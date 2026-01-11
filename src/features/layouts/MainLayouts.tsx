import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function MainLayouts() {
  return <div className="main-layout min-h-screen  flex flex-col">

    <Header /> 

    <div className="flex-1 flex items-center justify-center">
     <Outlet />
    </div>

    <Footer />
    
    </div>;
}
export default MainLayouts;