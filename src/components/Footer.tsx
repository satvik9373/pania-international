const Footer = () => {
  return (
    <footer className="bg-rich-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Logo and Company Description */}
          <div>
            <div className="-mb-2">
              <img 
                src="/Pania-logo.png" 
                alt="Pania International" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing the wisdom and flavors of Old Bharat to today's tables — that's the Pania International promise.
            </p>
          </div>
          
          {/* Helpful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">HELPFUL LINKS</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-olive-green transition-colors text-sm">About</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-olive-green transition-colors text-sm">All Products</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Contact</a></li>
              <li><a href="/#faq" className="text-gray-300 hover:text-olive-green transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">POLICIES</h4>
            <ul className="space-y-3">
              <li><a href="#refund" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Refund Policy</a></li>
              <li><a href="#shipping" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-olive-green transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact Us & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide">CONTACT US</h4>
            
            <div className="mt-8">
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-rich-brown flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-rich-brown flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
