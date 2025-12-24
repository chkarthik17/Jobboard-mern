import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Jobs", path: "/jobs" },
    { name: "Files", path: "/files" },
  ];

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-3 items-center h-16">

          {/* LEFT: LOGO */}
          <div className="flex flex-col">
            <span className="text-white text-xl font-bold">
              NextHire
            </span>
            <span className="text-gray-400 text-xs">
              Enhance your career… your choice
            </span>
          </div>

          {/* CENTER: NAV */}
          <div className="flex justify-between w-[420px]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group text-gray-300 font-medium"
                >
                  <span
                    className={`transition ${
                      isActive ? "text-white" : "group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* RED UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* RIGHT: EMPTY (BALANCE) */}
          <div></div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
