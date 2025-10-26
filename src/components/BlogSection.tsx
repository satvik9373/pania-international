import React from 'react'
import { Link } from 'react-router-dom'
import { blogs, type Blog } from '../data/blogs'

// Map blog ID to card/badge colors - All green
function themeFor(blogId: number) {
	// All cards will be green
	// Card background: sage (#BCD6C7) for green
	// Badge background: lighter tint of the same family
	return { card: '#BCD6C7', badge: '#DCE7E0' }
}

const BlogCard = ({ item }: { item: Blog }) => {
	const colors = themeFor(item.id)
	return (
		<Link to={`/blog/${item.slug}`} className="h-full">
			<article className="h-full rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden transition group hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] duration-200 ease-out flex flex-col cursor-pointer" style={{ backgroundColor: colors.card }}>
				{/* Image area with rounded top corners */}
				<div className="w-full h-48 md:h-56 overflow-hidden rounded-t-2xl">
					<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
				</div>

				{/* Content */}
				<div className="p-6 flex flex-col flex-1">
					<h3 className="font-bold text-[#5A3A2E] text-xl md:text-2xl leading-tight mb-3">
						{item.title}
					</h3>
					<p className="text-sm text-stone-700/90 clamp-2 mb-6">
						{item.description}
					</p>
					<div className="mt-auto">
						<span
							className="inline-block text-xs px-3 py-1 rounded-full"
							style={{ backgroundColor: colors.badge, color: '#5A3A2E' }}
						>
							{item.category}
						</span>
					</div>
				</div>
			</article>
		</Link>
	)
}

const BlogSection = () => {
	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10">
					<h2 className="text-3xl sm:text-4xl text-rich-brown font-semibold">Latest Blogs</h2>
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
