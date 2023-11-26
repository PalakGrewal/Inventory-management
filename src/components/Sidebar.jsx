import React, { useState } from "react";
import { FaTh, FaBars, FaUsers } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { TbFileReport } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
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
      path: "/notifications",
      name: "Notifications",
      icon: <IoNotifications />,
    },
    { path: "/profile", name: "Profile", icon: <CgProfile /> },
    { path: "/sign-in", name: "Logout", icon: <IoIosLogOut /> },
  ];

  return (
    <div
      className="flex 
    	min-height: 0px;
    min-h-min h-screen text-4xl float-left"
    >
      <div className="sidebar flex sticky flex-col gap-3 text-white bg-gray-700 mt-2 ml-2 mb-2 rounded text-4xl ">
        <div className="bars pt-4  pb-2 px-4 ">
          <FaBars onClick={toggle} />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link flex p-3 hover:bg-gray-800 focus:bg-gray-900 items-center rounded"
            activeclassName="active"
          >
            <div className="icon px-2 ">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text text-base font-semibold "
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
