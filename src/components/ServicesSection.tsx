import { motion } from 'framer-motion';
import { Globe, Tag, Leaf, Package, Building, Heart, Truck, MapPin, Dumbbell } from 'lucide-react';

const ServicesSection = () => {
  const exportServices = [
    {
      icon: Globe,
      title: "Global Export Network",
      description: "Exporting to Europe, Gulf & the Americas with reliable international shipping partners.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Tag,
      title: "Private Label & OEM",
      description: "Custom branding solutions and original equipment manufacturing for global brands.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Leaf,
      title: "Organic Sourcing",
      description: "Premium organic product sourcing directly from trusted Indian farms and producers.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Package,
      title: "Bulk Fulfillment",
      description: "Custom orders and large-scale bulk fulfillment with flexible delivery options.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const professionalServices = [
    {
      icon: Building,
      title: "Architectural Services",
      description: "Professional architectural design and consulting services.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Physiotherapy Services",
      description: "Online & offline physiotherapy services available in the U.K.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Dumbbell,
      title: "Fitness Coaching",
      description: "Global fitness coaching and wellness programs for all levels.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Truck,
      title: "Specialized Logistics",
      description: "Temperature-sensitive logistics and supply chain management.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <>
    <section className="py-20 bg-rich-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Soria, serif' }}>
            Our Export Services
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Comprehensive solutions connecting traditional Indian agriculture with global markets through quality, innovation, and reliability.
          </p>
        </motion.div>

        {/* Export Services Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {exportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full flex flex-col">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-rich-brown mb-4" style={{ fontFamily: 'Soria, serif' }}>
                    {service.title}
                  </h4>
                  <p className="text-rich-brown/70 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>

    {/* Professional Services Section with Different Background */}
    <section className="py-20 bg-olive-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Services Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Soria, serif' }}>
            Our Professional Services
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Specialized consulting and professional solutions across multiple industries with expert guidance and personalized service.
          </p>
        </motion.div>

        {/* Professional Services Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {professionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full flex flex-col">
                  <div className="w-20 h-20 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-rich-brown mb-4" style={{ fontFamily: 'Soria, serif' }}>
                    {service.title}
                  </h4>
                  <p className="text-rich-brown/70 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <a 
                    href="/services"
                    className="bg-rich-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-rich-brown/90 transition-colors inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;
