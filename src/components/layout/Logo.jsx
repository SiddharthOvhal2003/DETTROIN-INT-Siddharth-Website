import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
      aria-label="Home"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
        <GraduationCap size={24} />
      </div>

      <div className="leading-tight">
        <h1 className="text-lg font-bold tracking-tight">
          KIS Aligarh
        </h1>

        <p className="text-xs text-slate-500">
          Excellence In Education
        </p>
      </div>
    </Link>
  );
}

export default Logo;