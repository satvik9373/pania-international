
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Shop', href: '#shop' },
    { name: 'Community', href: '#community' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 relative">
      {/* Dripping Animation */}
      <div className="absolute top-0 right-8 w-8 h-8 z-10">
        <div className="relative">
          <div className="w-6 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full drip"></div>
          <div className="w-4 h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full drip absolute top-2 left-1" style={{ animationDelay: '1s' }}></div>
          <div className="w-3 h-3 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full drip absolute top-4 left-2" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-rich-brown">
              Pure<span className="text-olive-green">Harvest</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-olive-green transition-colors duration-200 font-medium"
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
                className="block px-3 py-2 text-gray-700 hover:text-olive-green transition-colors duration-200"
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
