
import { useLocation, Link as RouterLink, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  // Check if we're on the index page but with a different URL
  // This helps when opening in a new tab
  if (location.pathname === "/") {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bio-dark p-4">
      <div className="glass-card p-8 rounded-xl max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-button mb-6 mx-auto">
          <span className="text-bio-accent font-bold text-2xl">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white">Page Not Found</h1>
        <p className="text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/" className="glass-button px-6 py-3 rounded-lg flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </RouterLink>
          <RouterLink to="/" className="accent-button px-6 py-3 rounded-lg flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
