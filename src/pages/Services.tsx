import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Navbar />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-6">Services</h1>
          <p className="text-gray-600">This page contains the official services content. It has been restored to a clean state.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Services



            {/* Right Side - Stats */}              <div className="space-y-4">

            <motion.div                <div className="flex items-start gap-3">

              initial={{ opacity: 0, x: 30 }}                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />

              whileInView={{ opacity: 1, x: 0 }}                  <div>

              transition={{ duration: 0.6 }}                    <p className="text-gray-800 font-medium">Domain experts in each vertical</p>

              viewport={{ once: true }}                  </div>

              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"                </div>

            >

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Track Record</h3>                <div className="flex items-start gap-3">

                                <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />

              <div className="grid grid-cols-3 gap-6 mb-8">                  <div>

                <div className="text-center">                    <p className="text-gray-800 font-medium">Clear scope, milestones, and SLAs</p>

                  <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>                  </div>

                  <div className="text-sm text-gray-600">Projects Delivered</div>                </div>

                </div>

                <div className="text-center">                <div className="flex items-start gap-3">

                  <div className="text-3xl font-bold text-gray-900 mb-1">4.8/5</div>                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />

                  <div className="text-sm text-gray-600">Client Rating</div>                  <div>

                </div>                    <p className="text-gray-800 font-medium">Proactive communication & reporting</p>

                <div className="text-center">                  </div>

                  <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>                </div>

                  <div className="text-sm text-gray-600">Years Experience</div>

                </div>                <div className="flex items-start gap-3">

              </div>                  <CheckCircle className="w-6 h-6 text-olive-green flex-shrink-0 mt-1" />

                  <div>

              <h4 className="font-semibold text-gray-900 mb-4">How We Work</h4>                    <p className="text-gray-800 font-medium">Trusted by startups & enterprises</p>

              <div className="space-y-4">                  </div>

                {workProcess.map((step, index) => (                </div>

                  <div key={index} className="flex items-start gap-3">              </div>

                    <div className="w-8 h-8 bg-rich-brown text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">            </motion.div>

                      {step.step}

                    </div>            {/* Right Side - Stats */}

                    <div>            <motion.div

                      <p className="font-semibold text-gray-900">{step.title}</p>              initial={{ opacity: 0, x: 30 }}

                      <p className="text-sm text-gray-600">{step.description}</p>              whileInView={{ opacity: 1, x: 0 }}

                    </div>              transition={{ duration: 0.6 }}

                  </div>              viewport={{ once: true }}

                ))}              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"

              </div>            >

            </motion.div>              <div className="grid grid-cols-3 gap-6 mb-8">

          </div>                <div className="text-center">

        </div>                  <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>

      </section>                  <div className="text-sm text-gray-600">Projects Delivered</div>

                </div>

      {/* FAQ Section */}                <div className="text-center">

      <section className="py-20 bg-gray-50">                  <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">                  <div className="text-sm text-gray-600">Client Rating</div>

          <motion.div                </div>

            initial={{ opacity: 0, y: 30 }}                <div className="text-center">

            whileInView={{ opacity: 1, y: 0 }}                  <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>

            transition={{ duration: 0.6 }}                  <div className="text-sm text-gray-600">Years Experience</div>

            viewport={{ once: true }}                </div>

            className="text-center mb-12"              </div>

          >

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>              <div className="space-y-4 pt-6 border-t border-gray-300">

          </motion.div>                <div className="flex items-start gap-3">

                  <span className="text-olive-green">🚀</span>

          <div className="space-y-4">                  <p className="text-sm text-gray-700">Discovery → Proposal → Delivery → Support</p>

            {faqs.map((faq, index) => (                </div>

              <motion.div                <div className="flex items-start gap-3">

                key={index}                  <span className="text-olive-green">🚀</span>

                initial={{ opacity: 0, y: 20 }}                  <p className="text-sm text-gray-700">Clear SLAs and milestone tracking</p>

                whileInView={{ opacity: 1, y: 0 }}                </div>

                transition={{ duration: 0.5, delay: index * 0.1 }}                <div className="flex items-start gap-3">

                viewport={{ once: true }}                  <span className="text-olive-green">🚀</span>

                className="bg-white rounded-lg border border-gray-200 overflow-hidden"                  <p className="text-sm text-gray-700">Weekly updates & single point of contact</p>

              >                </div>

                <button              </div>

                  onClick={() => setOpenFaq(openFaq === index ? null : index)}            </motion.div>

                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"          </div>

                >        </div>

                  <span className="font-semibold text-gray-900">{faq.question}</span>      </section>

                  <span className="text-2xl text-gray-400">{openFaq === index ? '−' : '+'}</span>

                </button>      {/* FAQ Section */}

                {openFaq === index && (      <FAQSection />

                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">

                    <p className="text-gray-700">{faq.answer}</p>      {/* Contact Form Section */}

                  </div>      <section className="py-20 bg-gray-50">

                )}        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              </motion.div>          <motion.div

            ))}            initial={{ opacity: 0, y: 30 }}

          </div>            whileInView={{ opacity: 1, y: 0 }}

        </div>            transition={{ duration: 0.6 }}

      </section>            viewport={{ once: true }}

          >

      {/* Contact Form Section */}            <div className="grid lg:grid-cols-2 gap-0">

      <section className="py-20 bg-white">              {/* Left Side - Text Content */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">              <div className="bg-gray-50 p-8 lg:p-12 flex flex-col">

          <motion.div                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">

            initial={{ opacity: 0, y: 30 }}                  Let's build something extraordinary

            whileInView={{ opacity: 1, y: 0 }}                </h2>

            transition={{ duration: 0.6 }}                <p className="text-gray-600 mb-8">

            viewport={{ once: true }}                  Tell us a little about your needs. We'll reply within one business day with next steps.

          >                </p>

            <div className="grid lg:grid-cols-2 gap-0">                

              {/* Left Side - Text Content */}                <div className="space-y-4">

              <div className="bg-gray-50 p-8 lg:p-12 flex flex-col">                  <div className="flex items-center gap-3 text-gray-700">

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  Let's Build Something Extraordinary                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />

                </h2>                    </svg>

                <p className="text-gray-600 mb-8">                    <span>+91 00000 00000</span>

                  Tell us a little about your needs—whether it's a design project, rehabilitation plan, fitness programme or sourcing requirement. We'll reply within one business day with next steps.                  </div>

                </p>                  

                                  <div className="flex items-center gap-3 text-gray-700">

                <div className="space-y-4">                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <div className="flex items-center gap-3 text-gray-700">                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

                    <Phone className="w-5 h-5" />                    </svg>

                    <span>+91 00000 00000</span>                    <span>NDA-ready, privacy-first</span>

                  </div>                  </div>

                                  </div>

                  <div className="flex items-center gap-3 text-gray-700">              </div>

                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />              {/* Right Side - Contact Form */}

                    </svg>              <div className="bg-white p-8 lg:p-12">

                    <span>NDA-ready, privacy-first</span>                <form className="space-y-6">

                  </div>                  {/* Full Name */}

                </div>                  <div>

              </div>                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">

                      Full Name

              {/* Right Side - Contact Form */}                    </label>

              <div className="bg-white p-8 lg:p-12 border-l border-gray-200">                    <input

                <form className="space-y-6">                      type="text"

                  {/* Full Name */}                      id="fullName"

                  <div>                      name="fullName"

                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"

                      Full Name                      placeholder=""

                    </label>                    />

                    <input                  </div>

                      type="text"

                      id="fullName"                  {/* Email and Phone */}

                      name="fullName"                  <div className="grid md:grid-cols-2 gap-4">

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"                    <div>

                      placeholder="Your full name"                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

                    />                        Email

                  </div>                      </label>

                      <input

                  {/* Email and Phone */}                        type="email"

                  <div className="grid md:grid-cols-2 gap-4">                        id="email"

                    <div>                        name="email"

                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"

                        Email                        placeholder=""

                      </label>                      />

                      <input                    </div>

                        type="email"                    <div>

                        id="email"                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">

                        name="email"                        Phone

                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"                      </label>

                        placeholder="your.email@example.com"                      <input

                      />                        type="tel"

                    </div>                        id="phone"

                    <div>                        name="phone"

                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"

                        Phone                        placeholder=""

                      </label>                      />

                      <input                    </div>

                        type="tel"                  </div>

                        id="phone"

                        name="phone"                  {/* Service Dropdown */}

                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all"                  <div>

                        placeholder="+91 00000 00000"                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">

                      />                      Service

                    </div>                    </label>

                  </div>                    <select

                      id="service"

                  {/* Service Dropdown */}                      name="service"

                  <div>                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all bg-white"

                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">                    >

                      Service                      <option value="architectural">Architectural Services</option>

                    </label>                      <option value="export">Export Services</option>

                    <select                      <option value="quality">Quality Assurance</option>

                      id="service"                      <option value="sourcing">Sourcing Solutions</option>

                      name="service"                      <option value="logistics">Logistics Support</option>

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all bg-white"                    </select>

                    >                  </div>

                      <option value="architectural">Architectural Services</option>

                      <option value="physiotherapy">Physiotherapy</option>                  {/* Message */}

                      <option value="fitness">Online Fitness Consultations</option>                  <div>

                      <option value="procurement">Shipment & Procurement</option>                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                    </select>                      Message

                  </div>                    </label>

                    <textarea

                  {/* Message */}                      id="message"

                  <div>                      name="message"

                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">                      rows={4}

                      Message                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all resize-none"

                    </label>                      placeholder="Tell us about your project or goal..."

                    <textarea                    />

                      id="message"                  </div>

                      name="message"

                      rows={4}                  {/* Submit Button */}

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rich-brown focus:border-transparent outline-none transition-all resize-none"                  <button

                      placeholder="Describe your project or goal..."                    type="submit"

                    />                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"

                  </div>                  >

                    Send Request

                  {/* Submit Button */}                  </button>

                  <button

                    type="submit"                  {/* Privacy Notice */}

                    className="w-full bg-rich-brown text-white py-3 px-6 rounded-lg font-semibold hover:bg-rich-brown/90 transition-colors"                  <p className="text-xs text-gray-500 text-center">

                  >                    By submitting, you agree to our terms and privacy policy.

                    Send Request                  </p>

                  </button>                </form>

              </div>

                  {/* Privacy Notice */}            </div>

                  <p className="text-xs text-gray-500 text-center">          </motion.div>

                    By submitting, you agree to our terms and privacy policy.        </div>

                  </p>      </section>

                </form>

              </div>      {/* Footer */}

            </div>      <Footer />

          </motion.div>    </div>

        </div>  );

      </section>};



      {/* Footer */}export default Services;
      <Footer />
    </div>
  );
};

export default Services;
