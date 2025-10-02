import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sprout, GraduationCap, DollarSign, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/recruiting", label: "Join Us", icon: GraduationCap },
  { path: "/construction-loans", label: "Construction", icon: Building2 },
  { path: "/usda-loans", label: "USDA Loans", icon: Sprout },
  { path: "/training", label: "Training", icon: GraduationCap },
  { path: "/compensation", label: "Compensation", icon: DollarSign },
  { path: "/support", label: "Support", icon: HeadphonesIcon },
];

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">LH</span>
            </div>
            <span className="text-xl font-display font-bold">LendingHouse</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button 
                    variant={isActive ? "default" : "ghost"} 
                    size="sm"
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
          
          <Link to="/contact">
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
