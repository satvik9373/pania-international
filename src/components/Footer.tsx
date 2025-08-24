const Footer = () => {
  return (
    <footer className="bg-rich-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl mb-6">
              Pania<span className="text-olive-green">International</span>
            </h3>
            <p className="text-gray-300 mb-6 text-lg tracking-tight">
              Bringing you the finest natural products from farm to table. 
              Experience the purity of traditional Indian agriculture with modern excellence.
            </p>
          </div>
          <div>
            <h4 className="text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/about" className="hover:text-olive-green transition-colors tracking-tight">About Us</a></li>
              <li><a href="/categories" className="hover:text-olive-green transition-colors tracking-tight">Products</a></li>
              <li><a href="/services" className="hover:text-olive-green transition-colors tracking-tight">Services</a></li>
              <li><a href="/contact" className="hover:text-olive-green transition-colors tracking-tight">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-6">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-olive-green transition-colors tracking-tight">FAQ</a></li>
              <li><a href="#" className="hover:text-olive-green transition-colors tracking-tight">Shipping Info</a></li>
              <li><a href="#" className="hover:text-olive-green transition-colors tracking-tight">Returns</a></li>
              <li><a href="#" className="hover:text-olive-green transition-colors tracking-tight">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-lg tracking-tight">
            © 2024 Pania International. All rights reserved. Crafted with passion in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
