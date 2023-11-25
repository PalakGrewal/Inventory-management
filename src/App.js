import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import InventoryMgmt from "./pages/InventoryMgmt";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Roles from "./pages/Roles";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-200 h-screen text-base">
      <BrowserRouter>
        <Header />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign-in" element={<Login />}/>
            <Route path="/inventoryMgmt" element={<InventoryMgmt />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
