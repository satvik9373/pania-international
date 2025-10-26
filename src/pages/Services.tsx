import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Export Services',
      description: 'Connecting Indian natural products to global markets.',
      features: [
        'Exporting to Europe, Gulf & the Americas',
        'Private Label & OEM for brands',
        'Organic Product Sourcing',
        'Custom Orders & Bulk Fulfillment'
      ],
      buttonText: 'Get Export Quote',
      buttonLink: '/contact'
    },
    {
      title: 'Quality Assurance',
      description: 'Premium quality with certified standards.',
      features: [
        'ISO-grade processes',
        'Lab-tested products',
        'Traceability & transparency',
        'International certifications'
      ],
      buttonText: 'View Certifications',
      buttonLink: '/contact'
    },
    {
      title: 'Sourcing Solutions',
      description: 'Direct farm partnerships for authentic products.',
      features: [
        'Farmer-direct sourcing',
        'Traditional processing methods',
        'Seasonal product availability',
        'Custom procurement services'
      ],
      buttonText: 'Start Sourcing',
      buttonLink: '/contact'
    },
    {
      title: 'Logistics Support',
      description: 'Reliable, safe and fast end-to-end logistics.',
      features: [
        'Temperature-controlled shipping',
        'Pan-India procurement',
        'Global freight management',
        'Real-time tracking'
      ],
      buttonText: 'Get Logistics Quote',
      buttonLink: '/contact'
    }
  ];

  const features = [
    { icon: Shield, text: 'ISO-grade Processes' },
    { icon: Clock, text: '99.2% On-time' },
    { icon: Award, text: 'Certified Quality' },
    { icon: CheckCircle, text: 'Quality Assured' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Expert Services, One Trusted Team
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              From sourcing authentic ingredients to global logistics—our specialists deliver quality, speed, and care across every engagement.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a 
                href="#services"
                className="bg-rich-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-rich-brown/90 transition-colors inline-flex items-center gap-2"
              >
                Explore Services
                <span>→</span>
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-flex items-center gap-2"
              >
                <span>📞</span>
                Call Us
              </a>
            </motion.div>

            {/* Features List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>Multi-disciplinary experts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>On-time delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>Pan-India service</span>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block"
            >
              <div className="bg-olive-green/10 rounded-full p-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-olive-green mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Quality</p>
                  <p className="text-sm text-gray-600">Assured</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Icon className="w-6 h-6 text-olive-green flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose a service to see what's included, who it's for, and how we deliver measurable outcomes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                {/* Service Icon */}
                <div className="w-12 h-12 bg-rich-brown rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                
                {/* Service Description */}
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-olive-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={service.buttonLink}
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
                >
                  {service.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 mb-8">
                Tailored solutions, rigorous quality, and a transparent process—built around your goals and timelines.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Domain experts in each vertical</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Clear scope, milestones, and SLAs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Proactive communication & reporting</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Trusted by startups & enterprises</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">🚀</span>
                  <p className="text-sm text-gray-700">Discovery → Proposal → Delivery → Support</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">🚀</span>
                  <p className="text-sm text-gray-700">Clear SLAs and milestone tracking</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">🚀</span>
                  <p className="text-sm text-gray-700">Weekly updates & single point of contact</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Text Content */}
              <div className="bg-gray-50 p-8 lg:p-12 flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Let's build something extraordinary
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us a little about your needs. We'll reply within one business day with next steps.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+91 00000 00000</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>NDA-ready, privacy-first</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white p-8 lg:p-12">
                <form className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="architectural">Architectural Services</option>
                      <option value="export">Export Services</option>
                      <option value="quality">Quality Assurance</option>
                      <option value="sourcing">Sourcing Solutions</option>
                      <option value="logistics">Logistics Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project or goal..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Request
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;