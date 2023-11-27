import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router";

function AuthLayout() {
    return (
        <>
          <Header/>
          <Sidebar/>
          <Outlet/>      
        </>
    )
}

export default AuthLayout;
