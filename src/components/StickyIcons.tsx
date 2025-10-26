import React from 'react';

const StickyIcons = () => {
  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col space-y-6">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <img
          src="/graphical-assets/whatsapp.png"
          alt="WhatsApp"
          className="w-6 h-6"
        />
      </a>

      {/* Message Icon */}
      <a
        href="/contact" // Replace with actual contact page route
        className="bg-white hover:bg-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <img
          src="/graphical-assets/messages.png"
          alt="Message"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
};

export default StickyIcons;

