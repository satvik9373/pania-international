import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Slide = {
  id: string
  title: string
  body: string
  author: string
}

const slides: Slide[] = [
  {
    id: 't1',
    title: 'AMAZING QUALITY FOR MY FAMILY!',
    body: 'I have been purchasing from Pania International for over a year now, and the quality is exceptional! The A2 Bilona Ghee is so pure and aromatic. My kids love the natural sweeteners, and I feel great knowing I\'m giving them wholesome treats without any artificial sugar.',
    author: 'AMITA SHARMA',
  },
  {
    id: 't2',
    title: 'BEST GHEE IN THE MARKET - HANDS DOWN!',
    body: 'After trying multiple brands, I finally found the perfect ghee! Pania\'s A2 Bilona Ghee is absolutely divine. The traditional method of preparation really shows in the taste and texture. It\'s rich, pure, and has that authentic aroma that reminds me of my grandmother\'s kitchen.',
    author: 'MANSI VERMA',
  },
  {
    id: 't3',
    title: 'FRESHNESS AND PURITY YOU CAN TRUST',
    body: 'What impressed me most about Pania International is their commitment to quality and authenticity. Every product arrives fresh and well-packaged. The flavors are more vibrant, the aromas are stronger, and everything tastes so much better. My family has noticed the positive change in our meals.',
    author: 'RAHUL KAPOOR',
  },
  {
    id: 't4',
    title: 'EXCEPTIONAL VALUE AND PREMIUM QUALITY',
    body: 'As someone who is particular about what goes into my family\'s food, finding Pania International has been a blessing. Their products are premium in quality and reasonably priced. I especially love their essential oils - they\'re pure and therapeutic grade.',
    author: 'NEHA PATEL',
  },
]

const StarsRow = () => (
  <div className="flex items-center justify-center gap-1 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-rich-brown fill-current" />
    ))}
  </div>
)

function TextCard({ title, body, author }: { title: string; body: string; author: string }) {
  return (
  <div className="w-full h-full min-h-[380px] rounded-3xl bg-[#BCD6C7] shadow-sm ring-1 ring-black/5 p-8 text-center flex flex-col justify-start break-words whitespace-normal">
      <StarsRow />
      <h4 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-rich-brown mb-4 leading-snug break-words">
        {title}
      </h4>
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-6 flex-grow break-words">
        {body}
      </p>
      <p className="text-sm sm:text-base text-rich-brown font-semibold mt-auto">— {author}</p>
    </div>
  )
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 bg-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-rich-brown font-semibold">
            Why people love Pania
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-rich-brown hover:bg-rich-brown/90 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-rich-brown hover:bg-rich-brown/90 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-12 sm:px-16">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-2xl">
                  <TextCard
                    title={slides[currentIndex].title}
                    body={slides[currentIndex].body}
                    author={slides[currentIndex].author}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-rich-brown'
                    : 'w-2 bg-rich-brown/30 hover:bg-rich-brown/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
