import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Radio } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/api-docs", label: "API" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Radio className="h-8 w-8 text-tech-blue" />
              <div className="absolute inset-0 animate-pulse bg-tech-blue/20 rounded-full blur-md"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-signal bg-clip-text text-transparent">
                Antennar
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-tech-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">Try Demo</Link>
            </Button>
            <Button size="sm" className="bg-gradient-signal hover:shadow-glow-primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;