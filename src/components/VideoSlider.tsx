
import { useRef, useEffect } from 'react';
import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const VideoSlider = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
    },
    created: () => {
      // Auto-play videos when slider is ready
      videoRefs.current.forEach((video) => {
        if (video) {
          video.play();
        }
      });
    },
  });

  const products = [
    {
      id: 1,
      title: 'A2 Ghee',
      description: 'Pure and traditional',
      placeholder: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&h=300',
    },
    {
      id: 2,
      title: 'Raw Honey',
      description: 'Straight from the hive',
      placeholder: 'https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=400&h=300',
    },
    {
      id: 3,
      title: 'Organic Spices',
      description: 'Farm fresh spices',
      placeholder: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300',
    },
    {
      id: 4,
      title: 'Herbal Tea',
      description: 'Wellness in every sip',
      placeholder: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=400&h=300',
    },
    {
      id: 5,
      title: 'Organic Oils',
      description: 'Cold-pressed goodness',
      placeholder: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&h=300',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rich-brown mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600">
            Discover our collection of pure, natural products
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <div key={product.id} className="keen-slider__slide">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                {/* Using placeholder images instead of videos for demo */}
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.placeholder}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm opacity-90">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-olive-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
