import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import InventoryMgmt from "./pages/InventoryMgmt";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Layout from "./pages/Layout";
import AuthLayout from "./pages/AuthLayout";
import Customers from "./pages/Customers";


function App() {
  return (
    <div className="flex flex-col h-screen text-base">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventoryMgmt" element={<InventoryMgmt />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

