
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Tests", path: "/tests" },
    { label: "Guides", path: "/guides" },
    { label: "About", path: "/about" },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">MindProve</span>
        </Link>
        
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <div className="flex flex-col space-y-2 mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/login" onClick={() => setIsSheetOpen(false)}>Sign In</Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/register" onClick={() => setIsSheetOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <>
            <nav className="ml-auto flex items-center space-x-6 mr-6">
              <NavLinks />
            </nav>
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
