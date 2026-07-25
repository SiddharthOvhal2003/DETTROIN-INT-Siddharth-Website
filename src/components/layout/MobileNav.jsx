import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "@/config/navigation";

function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border transition hover:bg-slate-100"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="right" className="w-72">
          <div className="mt-10 flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-lg font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <button className="mt-4 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;