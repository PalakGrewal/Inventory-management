import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <div className='h-[100vh]'>
          <Header className="h-[10vh]"/>
          <div className='flex'>
          <Sidebar  />
          <Outlet className=""/>   
          </div>   
        </div>
    )
}

export default AuthLayout;
