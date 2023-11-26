import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col z-30">
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
}

export default AuthLayout;
