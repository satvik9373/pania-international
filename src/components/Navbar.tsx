
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/categories' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const navClass = transparent ? 'bg-transparent border-none' : 'bg-white border-b border-gray-100';
  const linkClass = (transparent
    ? 'text-white hover:text-cream'
    : 'text-gray-700 hover:text-olive-green') + ' transition-colors duration-200 leading-tightish';
  const logoClass = transparent ? 'text-white tracking-tight uppercase font-serif' : 'text-2xl text-rich-brown tracking-tight uppercase font-serif';

  return (
    <nav className={`${navClass} relative z-50`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`${logoClass} text-lg sm:text-xl lg:text-2xl`}>
              PANIA<span className={`${transparent ? 'text-cream' : 'text-olive-green'}`}>INTERNATIONAL</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkClass} text-sm lg:text-base`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${transparent ? 'text-white hover:text-cream' : 'text-gray-700 hover:text-olive-green'} transition-colors p-1`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`md:hidden absolute top-full left-0 right-0 ${transparent ? 'bg-black/90 backdrop-blur-sm' : 'bg-white'} border-t border-gray-100 shadow-lg z-40`}>
            <div className="px-3 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm ${transparent ? 'text-white hover:text-cream hover:bg-white/10' : 'text-gray-700 hover:text-olive-green hover:bg-gray-50'} transition-colors rounded-md`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
