
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Users, 
  ShoppingBag, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  BarChart, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Home,
  LogOut 
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "User Management", icon: Users, path: "/users" },
    { name: "Product Management", icon: ShoppingBag, path: "/products" },
    { name: "Consultations", icon: MessageSquare, path: "/consultations" },
    { name: "Contracts", icon: FileText, path: "/contracts" },
    { name: "Queries", icon: HelpCircle, path: "/queries" },
    { name: "Analytics", icon: BarChart, path: "/analytics" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className={`bg-sidebar h-screen flex flex-col text-sidebar-foreground transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      <div className="flex items-center p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h2 className="text-xl font-bold flex-1 text-white">Kisan Sahayak</h2>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-primary-600 text-white"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`sidebar-link ${isActive(item.path) ? "active" : ""}`}
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <button className="sidebar-link w-full justify-center md:justify-start">
          <LogOut size={20} />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
