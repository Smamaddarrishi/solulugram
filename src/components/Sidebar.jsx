import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

import {
  House,
  Search,
  Compass,
  Clapperboard,
  Send,
  Heart,
  PlusSquare,
  UserRound,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Home", icon: House, path: "/" },
  { name: "Search", icon: Search, path: "/search" },
  { name: "Explore", icon: Compass, path: "/explore" },
  { name: "Reels", icon: Clapperboard, path: "/reels" },
  { name: "Messages", icon: Send, path: "/messages" },
  { name: "Notifications", icon: Heart, path: "/notifications" },
  { name: "Create", icon: PlusSquare, path: "/create" },
  { name: "Profile", icon: UserRound, path: "/profile" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState("Home");

  // Keep the active item in sync with the current URL
  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname,
    );

    setActive(currentItem?.name || "");
  }, [location.pathname]);

  return (
    <aside
      className="fixed left-0 top-0 z-50 flex h-screen
        w-60 flex-col border-r border-gray-200 bg-white p-4"
    >
      {/* Logo */}
      <div className="mb-8 px-1">
        <img
          src={assets.logo}
          alt="Soululugram"
          className="w-40 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <button
            key={name}
            title={name}
            onClick={() => {
              setActive(name);
              navigate(path);
            }}
            className={`flex h-12 w-full items-center gap-4
              rounded-lg px-3 transition-colors
              hover:bg-gray-100
              ${active === name ? "font-bold" : "font-normal"}`}
          >
            <Icon
              size={25}
              strokeWidth={active === name ? 2.5 : 1.8}
              className="shrink-0"
            />

            <span className="whitespace-nowrap text-base">{name}</span>
          </button>
        ))}
      </nav>

      {/* More */}
      <button
        onClick={() => {
          // Add your More menu action here
        }}
        className="flex h-12 w-full shrink-0 items-center
          gap-4 rounded-lg px-3 hover:bg-gray-100"
      >
        <Menu size={25} />
        <span className="text-base">More</span>
      </button>
    </aside>
  );
};

export default Sidebar;
