
import { useEffect, useState } from 'react';

const AnnouncementBar = () => {
  const announcements = [
    "🎉 Flat 20% OFF on all A2 Ghee products | Limited Time Offer! 🎉",
    "🔥 Get 30% OFF on Bulk Orders - Order 5kg+ and Save Big! 🔥", 
    "✨ Free Shipping on orders above ₹2499 | Premium Quality Guaranteed ✨",
    "🌟 Special Discount: Buy 2 Get 1 Free on Wheat Flour | Fresh Stock Available 🌟",
    "💯 100% Natural Products | Farm to Table Freshness | Order Now! 💯",
    "🚚 Express Delivery Available | Get your order in 24-48 hours 🚚"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000); // Change announcement every 4 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="bg-[#2e3e27] text-white py-3 overflow-hidden relative">
      <div className="flex">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[currentIndex]}
          </span>
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[(currentIndex + 1) % announcements.length]}
          </span>
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[(currentIndex + 2) % announcements.length]}
          </span>
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[currentIndex]}
          </span>
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[(currentIndex + 1) % announcements.length]}
          </span>
          <span className="text-sm font-medium font-sans px-8 flex items-center">
            {announcements[(currentIndex + 2) % announcements.length]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
