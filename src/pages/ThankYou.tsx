import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e9e0' }}>
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Thank You Content */}
      <div className="flex items-center justify-center min-h-screen py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-green-100 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Thank You!
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                Your message has been sent successfully
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have received your inquiry and our team will get back to you within 24 hours. 
                We appreciate your interest in Pania International and look forward to working with you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-black mb-4">
                Need immediate assistance?
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>📧 sales@paniainternational.com</p>
                <p>📞 +91 98765 43210</p>
                <p>💬 WhatsApp: +91 87654 32109</p>
              </div>
            </div>

            {/* Back to Home Button */}
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
              style={{ backgroundColor: '#2e3e27' }}
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </button>

            {/* Additional Message */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Reference ID: #{Date.now().toString().slice(-8)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThankYou;
