import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'architectural',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-service-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        setSubmitStatus('error');
        alert('Failed to submit form. Please try again or contact us directly at sales@paniaexports.com');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Unable to submit form at this time. Please contact us directly at:\n\nEmail: sales@paniaexports.com\nPhone: +91 6261149388');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const services = [
    {
      title: 'Architectural Services',
      description: 'Craft functional, inspiring spaces that evolve with your lifestyle or business needs.',
      features: [
        'Custom homes & renovations with sustainable designs',
        'Commercial & mixed-use projects for productivity',
        'Institutional & civic facilities with accessibility focus',
        'Landscape & urban design integrating nature'
      ],
      buttonText: 'Start Your Architectural Project',
      buttonLink: '/contact'
    },
    {
      title: 'Physiotherapy (Online & In-Person)',
      description: 'Recover from injury, manage pain and improve mobility with certified physiotherapists.',
      features: [
        'Personalised treatment plans tailored to your goals',
        'Online physiotherapy via video consultations',
        'In-person treatment at select UK clinics',
        'Comprehensive care for injuries, pain & rehab'
      ],
      buttonText: 'Book Your Physio Session',
      buttonLink: '/contact'
    },
    {
      title: 'Online Fitness Consultations',
      description: 'Achieve your fitness goals from anywhere with one-on-one coaching via video calls.',
      features: [
        'One-on-one coaching with certified fitness coaches',
        'Customised workout plans for home or gym',
        'Goal-specific programmes: fat loss, muscle gain, mobility',
        'Continuous support with diet guidance & tracking'
      ],
      buttonText: 'Begin Your Fitness Journey',
      buttonLink: '/contact'
    },
    {
      title: 'Shipment & Procurement Services',
      description: 'Source products from anywhere in India and deliver them anywhere in the world.',
      features: [
        'All-India product sourcing: raw materials to handicrafts',
        'Vendor coordination, quality checks & procurement',
        'Pickup & packaging from remote villages to metros',
        'Pan-India & global shipping via air, road, rail or sea'
      ],
      buttonText: 'Get a Sourcing Quote',
      buttonLink: '/contact'
    }
  ];

  const features = [
    { icon: Shield, text: 'Multi-disciplinary experts' },
    { icon: Clock, text: 'Transparent pricing' },
    { icon: Award, text: 'On-time delivery' },
    { icon: CheckCircle, text: 'Global & pan-India reach' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">      {/* Navbar */}
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
              Expert Solutions in Architecture, Wellness & Global Procurement
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              From architecture and tailored physiotherapy to personalised online fitness and seamless procurement from India, our specialists deliver quality, care and reliability across every engagement.
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
                <span>?</span>
              </a>
              <a 
                href="/contact"
                className="bg-white border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-flex items-center gap-2"
              >
                <span>??</span>
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
                <span>Transparent pricing & processes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>On-time delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-olive-green" />
                <span>Global & pan-India reach</span>
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
                {/* Service Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-rich-brown rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
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
                  href="#contact-form"
                  className="block w-full text-center bg-olive-green hover:bg-olive-green/90 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
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
                Tailored solutions, rigorous quality, and a transparent process�built around your goals and timelines.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Multi-disciplinary expertise � architects, physiotherapists, fitness coaches and logistics professionals</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Client-centric approach � personalised plans and clear communication</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Transparent pricing & SLAs � no hidden costs, clear milestones and regular updates</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Global reach, local knowledge � pan-India sourcing and worldwide virtual services</p>
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
                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.8/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">??</span>
                  <p className="text-sm text-gray-700">Discovery & Consultation � understand your goals and priorities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">??</span>
                  <p className="text-sm text-gray-700">Proposal & Planning � develop a tailored solution and timeline</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">??</span>
                  <p className="text-sm text-gray-700">Delivery & Execution � implement with regular updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-olive-green">??</span>
                  <p className="text-sm text-gray-700">Support & Follow-Up � ongoing assistance and care</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
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
                  Let's Build Something Extraordinary
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us a little about your needs�whether it's a design project, rehabilitation plan, fitness programme or sourcing requirement. We'll reply within one business day with next steps.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+916261149388</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>sales@paniaexports.com</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
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
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="architectural">Architectural Services</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="fitness">Online Fitness</option>
                      <option value="procurement">Procurement & Shipment</option>
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
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project or goal..."
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      ? Thank you! We'll get back to you within one business day.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      ? Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
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