
import { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

interface SlideData {
  id: number;
  type: 'video' | 'image';
  src: string;
  alt?: string;
}

const HeroSlider = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    created: (s) => {
      // Auto-play videos when slider is ready
      videoRefs.current.forEach((video, index) => {
        if (video && slides[index].type === 'video') {
          video.play();
        }
      });
    },
    slideChanged: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides: SlideData[] = [
    {
      id: 1,
      type: 'image',
      src: '/Banner Image/1.png',
      alt: 'Premium A2 Ghee Products'
    },
    {
      id: 2,
      type: 'image',
      src: '/Banner Image/2.png',
      alt: 'Pure Organic Ghee Collection'
    },
    {
      id: 3,
      type: 'image',
      src: '/Banner Image/3.png',
      alt: 'Traditional Bilona Ghee'
    },
    {
      id: 4,
      type: 'image',
      src: '/Banner Image/4.png',
      alt: 'Natural Health Products'
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="keen-slider__slide relative h-full">
            {slide.type === 'video' ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default HeroSlider;
