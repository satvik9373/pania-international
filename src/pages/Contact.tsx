import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="relative text-white">
        {/* Background Wave Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/graphical-assets/graphical-assets.webp')`
          }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-4">CONTACT US</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Ready to proceed with your purchase? Get in touch with our team for personalized assistance and bulk pricing.
            </p>
            <div className="mt-6">
              <a href="/" className="text-sm text-white underline mr-2">Home</a>
              <span className="text-sm text-white">›</span>
              <span className="text-sm text-white ml-2">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-rich-brown mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you with your product inquiries, bulk orders, and any questions you may have about our offerings.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-olive-green/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-olive-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-rich-brown mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-olive-green/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-olive-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-rich-brown mb-1">Email</h3>
                  <p className="text-gray-600">sales@paniainternational.com</p>
                  <p className="text-gray-600">info@paniainternational.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-olive-green/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-olive-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-rich-brown mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Agriculture Hub,<br />
                    Natural Products District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-olive-green/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-olive-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-rich-brown mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-rich-brown mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-rich-brown mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-rich-brown mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-rich-brown mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-rich-brown mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-rich-brown mb-2">
                    Product Interest
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Which product are you interested in?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-rich-brown mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-green focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Tell us about your requirements, quantity needed, and any specific questions..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-olive-green text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
