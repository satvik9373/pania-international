import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Announcement */}
      <AnnouncementBar />

  {/* Navbar */}
  <Navbar />

      {/* Hero */}
      <header className="relative bg-olive-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide">ABOUT US</h1>
          <div className="mt-6">
            <a href="/" className="text-sm text-white underline mr-2">Home</a>
            <span className="text-sm text-white">›</span>
            <span className="text-sm text-white ml-2">About Us</span>
          </div>
        </div>

        {/* Curved Bottom Wave */}
        <div className="absolute left-0 right-0 bottom-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32">
            <path d="M0,0 C150,100 350,100 600,50 C850,0 1050,0 1200,80 L1200,120 L0,120 Z" fill="#edeee8"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <section className="mt-8 md:mt-12 max-w-4xl mx-auto text-gray-700 space-y-4">
          <p>
            Pania International connects traditional producers with businesses worldwide.
            We source, process and deliver natural, traceable food ingredients using
            sustainable methods. Our focus is quality, transparency and long-term
            partnerships with farmers and manufacturers.
          </p>
          <p>
            If you'd like to learn more about our sourcing, certifications or
            partnership opportunities, please reach out via the Contact page.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};export default About;
