import React, { useState } from "react";
import { FaTh, FaBars, FaUsers } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/dashboard", name: "Dashboard", icon: <MdSpaceDashboard /> },
    {
      path: "/inventoryMgmt",
      name: "Inventory Management",
      icon: <GrSystem />,
    },
    { path: "/categories", name: "Categories", icon: <MdCategory /> },
    { path: "/orders", name: "Orders", icon: <MdProductionQuantityLimits /> },
    { path: "/reports", name: "Reports", icon: <TbFileReport /> },
    { path: "/roles", name: "Roles", icon: <FaUsers /> },
    { path: "/settings", name: "Settings", icon: <IoSettings /> },
    {
      path: "/customers",
      name: "Customers",
      icon: <FaPeopleGroup />,
    },
    { path: "/profile", name: "Profile", icon: <CgProfile /> },
    { path: "/sign-in", name: "Logout", icon: <IoIosLogOut /> },
  ];

  return (
    <div className="flex">
      <div
        className={`sidebar flex flex-col text-white bg-gray-700 ${
          isOpen ? "w-48" : "w-16"
        } mt-2 ml-2 mb-2 rounded text-4xl transition-all ease-in-out`}
      >
        <div className="bars pt-4 pb-2 px-3">
          <FaBars onClick={toggle} />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link flex p-3 hover:bg-gray-800 focus:bg-gray-900 items-center rounded"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text pl-2 text-base font-semibold"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div
        className={`main-content ${
          isOpen ? "ml-2" : "ml-1/2"
        } transition-all ease-in-out flex-grow min-h-screen`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
