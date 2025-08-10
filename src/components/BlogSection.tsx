import React from 'react'

type Blog = {
  id: number
  title: string
  description: string
  image: string
  category: 'Design' | 'Technology' | 'Development' | 'Lifestyle'
}

const blogs: Blog[] = [
  {
    id: 1,
    title: '10 Web Design Trends to Watch in 2025',
    description:
      'Discover the latest design trends shaping the web and how to implement them in your next project.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    category: 'Design',
  },
  {
    id: 2,
    title: 'The Complete Guide to Modern JavaScript',
    description:
      'Explore modern JavaScript features that are revolutionizing development and making apps more performant.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Building Accessible Web Applications',
    description:
      'Best practices for creating inclusive web apps that work for everyone across devices and abilities.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    category: 'Development',
  },
  {
    id: 4,
    title: 'Optimizing Performance for React Apps',
    description:
      'Techniques and patterns to improve perceived and real performance in production React applications.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
    category: 'Development',
  },
  {
    id: 5,
    title: 'Design Systems: From Zero to One',
    description:
      'How to build and scale a design system that keeps your brand consistent across platforms.',
    image: 'https://images.unsplash.com/photo-1524146128017-d7f13e4e0090?q=80&w=1200&auto=format&fit=crop',
    category: 'Design',
  },
  {
    id: 6,
    title: 'TypeScript Patterns for Large Projects',
    description:
      'Make big codebases safer and easier to maintain with practical TypeScript patterns and tips.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    category: 'Technology',
  },
]

function badgeStyles(category: Blog['category']) {
  switch (category) {
    case 'Design':
      return 'bg-[#FCEDEA] text-[#5A3A2E]'
    case 'Technology':
      return 'bg-[#BCD6C7] text-[#5A3A2E]'
    case 'Development':
      return 'bg-[#FCEDEA] text-[#5A3A2E]'
    case 'Lifestyle':
      return 'bg-[#BCD6C7] text-[#5A3A2E]'
    default:
      return 'bg-[#FCEDEA] text-[#5A3A2E]'
  }
}

const BlogCard = ({ item }: { item: Blog }) => {
  return (
    <article className="h-full bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden transition group hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] duration-200 ease-out flex flex-col">
      {/* Image area */}
      <div className="w-full h-48 md:h-56 bg-gray-100 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-sans font-bold text-[#5A3A2E] text-xl md:text-2xl leading-tight mb-3">
          {item.title}
        </h3>
        <p className="font-sans text-sm text-gray-600 clamp-2 mb-6">
          {item.description}
        </p>
        <div className="mt-auto">
          <span className={`inline-block text-xs px-3 py-1 rounded-full ${badgeStyles(item.category)}`}>
            {item.category}
          </span>
        </div>
      </div>
    </article>
  )
}

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-rich-brown font-playfair font-semibold">Latest Blogs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {blogs.map((b) => (
            <div key={b.id} className="h-full">
              <BlogCard item={b} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

