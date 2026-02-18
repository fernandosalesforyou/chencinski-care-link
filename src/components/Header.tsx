import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Sou", href: "#quem-sou" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Localização", href: "#localizacao" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#localizacao" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Dr. Moises Chencinski - Pediatria e Homeopatia" className="h-10 md:h-12" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-background border-t border-border pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
