import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    console.log('Form submitted:', formData);
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e9e0' }}>
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="relative text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/graphical-assets/graphical-assets.webp')`
          }}
        ></div>
        
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
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you with your product inquiries, bulk orders, and any questions you may have about our offerings.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Phone</h3>
                  <p className="text-gray-600">+91 6261149388</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-600">sales@paniaexports.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Address</h3>
                  <p className="text-gray-600">
                    606, Sai Raj Heights,<br />
                    Punawale<br />
                    Pune
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-8" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}>Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-3" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.025em', lineHeight: '1.6' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300"
                      style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-3" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.025em', lineHeight: '1.6' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300"
                      style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-3" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.025em', lineHeight: '1.6' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-300"
                    style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}
                    placeholder="Tell us about your requirements and any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300"
                  style={{ backgroundColor: '#2e3e27', fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}>
              Find Us Here
            </h3>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.02em' }}>
              Visit our office for direct consultations and product demonstrations
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.536790929342!2d73.73565877501616!3d18.639892982476926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba199021bf43%3A0x85ac6f40a186cc82!2sSai%20Raj%20Heights!5e0!3m2!1sen!2sin!4v1758008672104!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0, borderRadius: '24px' }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pania International Location"
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
