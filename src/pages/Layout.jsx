import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <><div  className="h-[10vh]">

      <Header />
    </div>
      <Outlet />
    </>
  );
}

export default Layout;
