import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Announcement */}
      <AnnouncementBar />

  {/* Navbar */}
  <Navbar />

      {/* Hero */}
      <header className="relative text-white">
        {/* Background Wave Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/graphical-assets/graphical-assets.webp')`
          }}
        ></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide">ABOUT US</h1>
          <div className="mt-6">
            <a href="/" className="text-sm text-white underline mr-2">Home</a>
            <span className="text-sm text-white">›</span>
            <span className="text-sm text-white ml-2">About Us</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <section className="mt-8 md:mt-12 max-w-4xl mx-auto text-gray-700 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-rich-brown mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-4"></div>
            <p className="text-xl font-serif text-olive-green tracking-wider">Natural. Premium. Authentic.</p>
          </div>
          
          <div className="text-justify space-y-6">
            <p className="text-lg leading-relaxed">
              Pania International was founded with a simple yet powerful vision — to take the purity and richness of India's natural produce to the world. For generations, India has been known as the land of agriculture, wellness, and tradition. At Pania International, we carry that heritage forward by carefully sourcing, processing, and delivering premium-quality products that blend authenticity with global standards.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our portfolio covers a diverse range of offerings, including fresh fruits and vegetables, cold-pressed and refined oils, dairy-based ghee, natural sweeteners and sugars, grains and staples, essential oils, and nutraceuticals. Each product is handpicked from trusted farms and suppliers across India, ensuring that what reaches our partners is not just food, but a story of purity, care, and sustainability.
            </p>
            
            <div className="p-6 my-8 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-serif text-rich-brown mb-4">Farm-to-Market Approach</h3>
              <p className="text-lg leading-relaxed text-justify">
                What sets us apart is our farm-to-market approach. We work closely with local farmers, empowering them with fair trade practices, sustainable methods, and modern technology while preserving traditional values. This not only guarantees quality but also helps create a positive impact on rural communities and the environment.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              With a strong global presence, we proudly export to Europe, the Gulf, and the Americas, serving a wide range of B2B clients — from distributors and retailers to private labels and hospitality groups. Our services go beyond products: we offer custom bulk fulfillment, private label & OEM solutions, and organic product sourcing, backed by strict compliance with international standards.
            </p>
            
            <div className="p-6 my-8 bg-orange-50 rounded-lg">
              <h3 className="text-2xl font-serif text-rich-brown mb-4">Quality Foundation</h3>
              <p className="text-lg leading-relaxed text-justify">
                At Pania International, quality is more than a promise — it's our foundation. Every product undergoes rigorous checks to ensure it meets the highest benchmarks of purity, freshness, and safety. Our logistics expertise ensures temperature-sensitive goods and bulk shipments are delivered efficiently, with reliability at every step.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              We believe that food is more than sustenance — it is culture, tradition, and connection. That's why our motto is simple: <strong className="text-olive-green">Natural. Premium. Authentic.</strong> With every shipment, we aim to deliver not just goods, but trust, care, and a piece of India's agricultural soul to the world.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};export default About;
