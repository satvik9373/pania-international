import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

type Blog = {
	id: number
	title: string
	description: string
	image: string
	category: string
	content: string
}

// Updated blogs with your new content
const blogs: Blog[] = [
	{
		id: 1,
		title: 'Rediscovering Khapli Wheat Flour: Ancient Grain, Modern Nourishment',
		description:
			'In an era where ultra-processed foods dominate, ancient grains are making a powerful comeback. Among these, Khapli wheat (also known as Emmer wheat) stands apart with its compelling blend of nutrients, digestibility, and flavor.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Grains & Nutrition',
	},
	{
		id: 2,
		title: 'The Sacred Essence of Sambrani Dhup Cups: Purity, Calmness, and Spiritual Energy',
		description:
			'Lighting a Sambrani Dhup Cup has been a timeless tradition in Indian homes, temples, and meditation spaces. Known for its purifying aroma and calming properties, sambrani creates an atmosphere of peace.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Spiritual & Wellness',
	},
	{
		id: 3,
		title: 'Virgin & Extra Virgin Olive Oil — Pure Goodness, Naturally',
		description:
			'When it comes to wellness and taste, extra virgin olive oil (EVOO) stands apart as a natural elixir. We bring you virgin and extra virgin olive oil sourced from trusted producers, carefully packaged to preserve freshness.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Health',
	},
	{
		id: 4,
		title: 'Pomace Olive Oil — The Unsung Hero of High-Heat Cooking',
		description:
			'Pomace olive oil is a versatile, refined oil widely valued for its high smoke point, neutral flavor, and affordability. Perfect for homes, restaurants, and food industries worldwide.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Cooking',
	},
	{
		id: 5,
		title: 'Refined Sunflower Oil: The Neutral, High-Heat Cooking Choice',
		description:
			'Sunflower oil is one of the most widely used vegetable oils worldwide, known for its light flavor, versatility, and favorable fat profile that meets strict quality standards for global markets.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Cooking',
	},
	{
		id: 6,
		title: 'Essential Oils from India – Pure, Natural & Trusted by the World',
		description:
			'Essential oils are nature\'s most powerful extracts – concentrated drops that capture the true essence, fragrance, and healing properties of plants. We bring you the finest pure essential oils from India.',
		image: '/Blog Images/Essential-oil.webp',
		category: 'Essential Oils & Wellness',
	},
]

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
		<article
			className="h-full rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden transition group hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] duration-200 ease-out flex flex-col"
			style={{ backgroundColor: colors.card }}
		>
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
