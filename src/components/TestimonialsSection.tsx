import { Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

type Slide = {
  id: string
  title: string
  body: string
  author: string
}

const slides: Slide[] = [
  {
    id: 't1',
    title: 'MY KIDS LOVE THIS!',
  body: 'Great packing and quality. An easy way to give my kids sweet treats without sugar.',
    author: 'AMITA',
  },
  {
    id: 't2',
    title: 'BEST GHEE IN THE MARKET',
  body: 'Well packed and looks amazing. Pure ghee—been using it for a year; not switching!',
    author: 'MANSI',
  },
  {
    id: 't3',
    title: 'SO FRESH AND CLEAN',
  body: 'Tastes pure and authentic. You can feel the difference in everyday cooking.',
    author: 'RAHUL',
  },
  {
    id: 't4',
    title: 'GREAT VALUE AND QUALITY',
  body: 'Premium quality with reliable delivery. You can feel the difference in every dish!',
    author: 'NEHA',
  },
  {
    id: 't5',
    title: 'AMAZING QUALITY!',
  body: 'Best products I have ever used. Highly recommended for everyone.',
    author: 'PRIYA',
  },
  {
    id: 't6',
    title: 'EXCELLENT SERVICE',
  body: 'Fast delivery and great customer service. Will definitely order again.',
    author: 'RAJESH',
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
  <div className="w-64 h-56 rounded-2xl bg-[#BCD6C7] shadow-sm ring-1 ring-black/5 p-4 text-center flex flex-col justify-between break-words whitespace-normal flex-shrink-0">
      <StarsRow />
      <h4 className="text-sm font-semibold tracking-tight text-rich-brown mb-2 leading-snug break-words">
        {title}
      </h4>
      <p className="text-xs text-gray-800 leading-relaxed mb-2 flex-grow break-words">
        {body}
      </p>
      <p className="text-sm text-rich-brown font-semibold tracking-tight">-{author}</p>
    </div>
  )
}

const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth
    let scrollLeft = 0
    const speed = 1 // pixels per interval

    const autoScroll = () => {
      scrollLeft += speed
      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollLeft = 0
      }
      carousel.scrollLeft = scrollLeft
    }

    const interval = setInterval(autoScroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-rich-brown font-semibold tracking-tight">
            WHY PEOPLE LOVE PANIA
          </h2>
        </div>

        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...slides, ...slides].map((s, index) => (
            <TextCard key={`${s.id}-${index}`} title={s.title} body={s.body} author={s.author} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
