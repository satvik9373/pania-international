import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <header className="relative bg-olive-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide">OUR SERVICES</h1>
          <div className="mt-6">
            <a href="/" className="text-sm text-white underline mr-2">Home</a>
            <span className="text-sm text-white">›</span>
            <span className="text-sm text-white ml-2">Services</span>
          </div>
        </div>

        {/* Curved Bottom Wave */}
        <div className="absolute left-0 right-0 bottom-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32">
            <path d="M0,0 C150,100 350,100 600,50 C850,0 1050,0 1200,80 L1200,120 L0,120 Z" fill="#edeee8"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Services Section from Home Page */}
        <section className="py-16 bg-white mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image on Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/service-img/Services.webp"
                    alt="Our Services"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content on Right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-rich-brown leading-tight">
                    Our Export Services
                  </h2>
                </div>

                {/* Export Services */}
                <div className="space-y-4">
                  <div className="space-y-3 ml-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Exporting to Europe, Gulf & the Americas</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Private Label & OEM for brands</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Organic Product Sourcing from trusted Indian farms</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Custom Orders & Bulk Fulfillment</p>
                    </div>
                  </div>
                </div>

                {/* Professional Services */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-olive-green flex items-center">
                    🔹Our Professional Services
                  </h3>
                  
                  <div className="space-y-3 ml-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Architectural Services</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Online & Offline Physiotherapy (U.K.)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Fitness Coaching (Global)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Temperature-Sensitive Logistics</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Pan-India Procurement & Shipment</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mt-8 md:mt-12 max-w-4xl mx-auto text-gray-700 space-y-8">
          
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-olive-green mb-4">What We Offer</h2>
            <p className="text-lg font-sans">
              Pania International provides comprehensive solutions for natural food ingredients, 
              connecting traditional producers with global markets through quality and transparency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-olive-green mb-3">Premium Sourcing</h3>
              <p className="font-sans">
                We source the finest natural ingredients directly from trusted farmers and producers 
                across India, ensuring authenticity and superior quality in every product.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-olive-green mb-3">Quality Processing</h3>
              <p className="font-sans">
                Our state-of-the-art processing facilities maintain the integrity of natural ingredients 
                while meeting international food safety and quality standards.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-olive-green mb-3">Global Distribution</h3>
              <p className="font-sans">
                We handle complete logistics and distribution, ensuring your products reach global 
                markets efficiently while maintaining freshness and quality.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-olive-green mb-3">Partnership Support</h3>
              <p className="font-sans">
                We build long-term partnerships with farmers and manufacturers, providing ongoing 
                support, fair pricing, and sustainable business relationships.
              </p>
            </div>

          </div>

          {/* Categories We Serve */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-olive-green mb-6">Product Categories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-rich-brown mb-2">Natural Oils & Ghee</h4>
                <p className="text-sm text-gray-600">Cold-pressed oils and traditional A2 bilona ghee</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-rich-brown mb-2">Organic Grains</h4>
                <p className="text-sm text-gray-600">Premium wheat flour, rice, and traditional grains</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-rich-brown mb-2">Natural Sweeteners</h4>
                <p className="text-sm text-gray-600">Pure jaggery and traditional sweetening solutions</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-olive-green/10 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-olive-green mb-4">Ready to Partner With Us?</h3>
            <p className="mb-6 font-sans">
              Discover how our services can help you access premium natural ingredients 
              with complete transparency and reliability.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-olive-green text-white px-8 py-3 rounded-md hover:bg-olive-green/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>

        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
