
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ transparent = false }: { transparent?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/categories' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const navClass = 'bg-[#2e3e27] border-none';
  const linkClass = 'text-white hover:text-gray-200 transition-colors duration-200 leading-tightish font-medium';
  const logoClass = 'text-white tracking-tight uppercase';

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsContactDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsContactDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

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
                style={{ fontFamily: 'Coolvetica, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
            
            {/* Contact Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`${linkClass} text-sm lg:text-base`}
                style={{ fontFamily: 'Coolvetica, sans-serif' }}
              >
                Contact Us
              </button>
              
              {/* Dropdown Menu */}
              {isContactDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded shadow-md py-1 z-50">
                  <a
                    href="/contact"
                    className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 transition-colors"
                    style={{ fontFamily: 'Coolvetica, sans-serif' }}
                  >
                    Contact Us
                  </a>
                  <a
                    href="/spice-import-form"
                    className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 transition-colors"
                    style={{ fontFamily: 'Coolvetica, sans-serif' }}
                  >
                    Importer Requirement Form
                  </a>
                </div>
              )}
            </div>
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
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Contact Us Dropdown for Mobile */}
              <div>
                <button
                  onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                  className="w-full text-left px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-white/10 transition-colors rounded-md font-medium"
                  style={{ fontFamily: 'Coolvetica, sans-serif' }}
                >
                  Contact Us
                </button>
                
                {isContactDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a
                      href="/contact"
                      className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                      style={{ fontFamily: 'Coolvetica, sans-serif' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </a>
                    <a
                      href="/spice-import-form"
                      className="block px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                      style={{ fontFamily: 'Coolvetica, sans-serif' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Importer Requirement Form
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
