import { ArrowLeft, Check } from 'lucide-react';
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
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#e8e9e0', fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.025em' }}>
      {/* Announcement */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Thank You Content - Full Page */}
      <div className="flex items-center justify-center min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Floating Tick Icon Above Thank You */}
          <div className="flex justify-center mb-8">
            <div 
              className="bg-green-500 rounded-full p-4 animate-bounce shadow-lg"
              style={{
                animation: 'float 3s ease-in-out infinite, fadeIn 0.8s ease-out'
              }}
            >
              <Check className="h-12 w-12 text-white stroke-[3]" />
            </div>
          </div>

          {/* Big Thank You Text */}
          <h1 
            className="text-6xl md:text-8xl font-bold text-black mb-12" 
            style={{ 
              fontFamily: 'Coolvetica, sans-serif', 
              letterSpacing: '0.03em',
              animation: 'slideUp 1s ease-out 0.3s both'
            }}
          >
            THANK YOU
          </h1>

          {/* Success Message */}
          <h2 
            className="text-2xl md:text-3xl font-semibold text-black mb-6" 
            style={{ 
              fontFamily: 'Coolvetica, sans-serif', 
              letterSpacing: '0.025em',
              animation: 'slideUp 1s ease-out 0.6s both'
            }}
          >
            Your message has been sent successfully
          </h2>
          
          {/* Description */}
          <p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto" 
            style={{ 
              fontFamily: 'Coolvetica, sans-serif', 
              letterSpacing: '0.02em',
              animation: 'slideUp 1s ease-out 0.9s both'
            }}
          >
            We have received your inquiry and our team will get back to you within 24 hours. We appreciate your interest in Pania International and look forward to working with you.
          </p>

          {/* Small Back to Home Button */}
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#2e3e27', 
              fontFamily: 'Coolvetica, sans-serif', 
              letterSpacing: '0.02em',
              animation: 'slideUp 1s ease-out 1.2s both'
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.3); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
