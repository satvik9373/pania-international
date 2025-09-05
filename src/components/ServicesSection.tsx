import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
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
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
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
  );
};

export default ServicesSection;
