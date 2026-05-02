import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Menu, X, Wallet, Building2, UserPlus } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products & Services" },
    { href: "/donate", label: "Donate / CSR" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container overflow-hidden">
        <div className="flex h-16 max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-bold font-heading text-xl tracking-tight text-primary">BMTRA</span>
            </Link>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l">
                 <Button variant="outline" asChild>
                    <Link to="/onboarding">Open Account</Link>
                 </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background p-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button className="w-full" variant="outline" asChild onClick={() => setIsOpen(false)}>
                <Link to="/onboarding">Open Account</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
