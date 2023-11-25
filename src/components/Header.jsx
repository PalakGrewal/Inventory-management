import React from "react";
import Logo from "./logo";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="top_section sticky top-0 z-50 text-white bg-gray-700 mt-2 mx-2 rounded p-2 flex justify-between items-center">
      <Logo className="text-2xl"/>
      <div className="tabs flex flex-row gap-2">
        <NavLink
          to="/sign-in"
          className="link p-3 hover:bg-gray-800 focus:bg-gray-900 items-center rounded"
          activeclassName="active"
        >Sing In</NavLink>
        <NavLink
          to="/sign-up"
          className="link flex p-3 hover:bg-gray-800 focus:bg-gray-900 items-center rounded"
          activeclassName="active"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
