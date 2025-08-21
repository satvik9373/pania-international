
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/categories' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'contact us', href: '/contact' },
  ];

  const navClass = transparent ? 'bg-transparent border-none' : 'bg-white border-b border-gray-100';
  const linkClass = (transparent
    ? 'text-white hover:text-cream'
    : 'text-gray-700 hover:text-olive-green') + ' transition-colors duration-200 leading-tightish';
  const logoClass = transparent ? 'text-white tracking-tight uppercase' : 'text-2xl text-rich-brown tracking-tight uppercase';

  return (
    <nav className={`${navClass} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={logoClass}>
              PANIA<span className={`${transparent ? 'text-cream' : 'text-olive-green'}`}>INTERNATIONAL</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={linkClass}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-olive-green transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-olive-green transition-colors duration-200 leading-tightish"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
