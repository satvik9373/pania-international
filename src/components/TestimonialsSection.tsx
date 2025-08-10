import { Star } from 'lucide-react'

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
  <div className="w-full h-full min-h-[280px] rounded-3xl bg-[#BCD6C7] shadow-sm ring-1 ring-black/5 p-6 text-center flex flex-col justify-start break-words whitespace-normal font-playfair">
      <StarsRow />
      <h4 className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-rich-brown mb-3 leading-snug break-words">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-800 leading-relaxed mb-4 flex-grow break-words">
        {body}
      </p>
      <p className="text-sm text-rich-brown font-semibold mt-auto">-{author}</p>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-rose-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-rich-brown font-playfair font-semibold">
            Why people love Pania
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {slides.slice(0, 4).map((s) => (
            <div key={s.id} className="h-full flex">
              <TextCard title={s.title} body={s.body} author={s.author} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
