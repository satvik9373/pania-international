
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

  const navClass = 'bg-[#2e3e27] border-none';
  const linkClass = 'text-white hover:text-gray-200 transition-colors duration-200 leading-tightish font-medium';
  const logoClass = 'text-white tracking-tight uppercase';

  return (
    <nav className={`${navClass} relative z-50`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="/Pania-logo.png" 
                alt="Pania International" 
                className="h-20 sm:h-24 lg:h-28 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkClass} text-sm lg:text-base`}
                style={{ fontFamily: 'InterTight-Medium, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 transition-colors p-2"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#2e3e27] border-t border-gray-600 shadow-lg z-40">
            <div className="px-3 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-white/10 transition-colors rounded-md font-medium"
                  style={{ fontFamily: 'InterTight-Medium, sans-serif' }}
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
