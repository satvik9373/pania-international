
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
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
    },
    drag: true,
    dragSpeed: 1.5,
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

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        instanceRef.current?.prev();
      } else if (e.key === 'ArrowRight') {
        instanceRef.current?.next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [instanceRef]);

  const slides: SlideData[] = [
    {
      id: 1,
      type: 'image',
      src: '/Banner Image/1.webp',
      alt: 'Premium A2 Ghee Products'
    },
    {
      id: 2,
      type: 'image',
      src: '/Banner Image/2.webp',
      alt: 'Pure Organic Ghee Collection'
    },
    {
      id: 3,
      type: 'image',
      src: '/Banner Image/3.webp',
      alt: 'Traditional Bilona Ghee'
    },
    {
      id: 4,
      type: 'image',
      src: '/Banner Image/4.webp',
      alt: 'Natural Health Products'
    }
  ];

  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-screen overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="keen-slider__slide relative h-full w-full">
            {slide.type === 'video' ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="absolute inset-0 w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center sm:object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Responsive positioning */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-2 md:p-3 transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-2 md:p-3 transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
      </button>

      {/* Mobile-friendly touch indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint for mobile - subtle and less intrusive */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-medium z-10 sm:hidden animate-pulse">
        Swipe
      </div>
    </section>
  );
};

export default HeroSlider;
