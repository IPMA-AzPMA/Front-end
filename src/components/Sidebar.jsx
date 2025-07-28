"use client"

import { FaBars, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/styles/components/sidebar.css";
import logo from "../assets/images/logos/logo.png";
import {
  FaChartBar,
  FaStore,
  FaChartLine,
  FaComments,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ activeItem, setActiveItem, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaChartBar />, href: "/dashboard" },
    { id: "store", label: "My Store", icon: <FaStore />, href: "/store" },
    { id: "analytics", label: "Analytics", icon: <FaChartLine />, href: "/analytics" },
    { id: "messages", label: "Message", icon: <FaComments />, href: "/messages" },
    { id: "team", label: "Team", icon: <FaUsers />, href: "/team" },
    { id: "settings", label: "Settings", icon: <FaCog />, href: "/settings" },
    { id: "logout", label: "Logout", icon: <FaSignOutAlt />, href: "/logout" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img className="sidebarMenuLogo" src={logo} alt="Logo" />
          <p>Formix</p>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? <IoIosArrowForward /> : <IoIosArrowForward />}
        </button>
      </div>

      <nav>
        <ul className="sidebar-nav">
          {menuItems.map((item) => (
            <li key={item.id} className="sidebar-nav-item">
              <Link
                to={item.href}
                className={`sidebar-nav-link ${activeItem === item.id ? "active" : ""}`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                {isOpen && <span className="sidebar-label">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
