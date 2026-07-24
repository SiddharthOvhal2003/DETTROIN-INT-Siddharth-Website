import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { NAV_LINKS } from "@/config/navigation";

function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-72">
          <div className="mt-10 flex flex-col gap-6">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2 text-lg font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <Button className="mt-4 w-full rounded-xl">
              Apply Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;