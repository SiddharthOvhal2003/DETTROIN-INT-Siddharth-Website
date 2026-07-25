import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-20 w-20 text-blue-600" />

        <h1 className="mt-6 text-6xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Button className="mt-8">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default NotFound;