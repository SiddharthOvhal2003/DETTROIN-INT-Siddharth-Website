import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "@/config/navigation";

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-8 lg:flex"
      aria-label="Desktop Navigation"
    >
      {NAV_LINKS.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `group relative text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.title}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                  isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default DesktopNav;