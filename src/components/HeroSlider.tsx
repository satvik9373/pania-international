
import { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface SlideData {
  id: number;
  type: 'video' | 'image';
  src: string;
  alt?: string;
  title: string;
  subtitle: string;
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
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&h=1080',
      alt: 'Natural landscape',
      title: 'Pure & Natural',
      subtitle: 'From farm to table, experience authentic flavors'
    },
    {
      id: 2,
      type: 'video',
      src: 'https://player.vimeo.com/external/371433846.hd.mp4?s=8a91b8c3c1c5ce6b9a8b5b1b8b1b8b1b',
      title: 'Traditional Methods',
      subtitle: 'Crafted with time-honored techniques'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://player.vimeo.com/external/434045526.hd.mp4?s=8a91b8c3c1c5ce6b9a8b5b1b8b1b8b1b',
      title: 'A2 Ghee Excellence',
      subtitle: 'Premium quality for your wellness'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1920&h=1080',
      alt: 'Starry night sky',
      title: 'Organic Heritage',
      subtitle: 'Connecting you to nature\'s finest gifts'
    },
    {
      id: 5,
      type: 'video',
      src: 'https://player.vimeo.com/external/418979306.hd.mp4?s=8a91b8c3c1c5ce6b9a8b5b1b8b1b8b1b',
      title: 'Raw Honey',
      subtitle: 'Straight from the hive to your home'
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
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-6xl lg:text-8xl font-kalnia mb-6 text-white">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-white opacity-90 font-kalnia">
                  {slide.subtitle}
                </p>
                <button className="bg-olive-green text-white px-8 py-4 rounded-lg font-kalnia hover:bg-opacity-90 transition-all duration-300 hover-scale">
                  Explore Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
