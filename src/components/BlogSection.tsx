import React from 'react'

type Blog = {
	id: number
	title: string
	description: string
	image: string
	category: 'Ghee' | 'Honey' | 'Oils' | 'Spices' | 'Farming' | 'Staples'
}

// Natural, earthy, agri-focused posts
const blogs: Blog[] = [
	{
		id: 1,
		title: 'How A2 Ghee Is Made: From Grass-Fed Cows to Your Table',
		description:
			'A simple walkthrough of the traditional bilona method and why A2 ghee tastes richer and feels lighter.',
		image:
			'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1400&auto=format&fit=crop',
		category: 'Ghee',
	},
	{
		id: 2,
		title: 'Cold-Pressed Oils: Benefits and Best Uses in Daily Cooking',
		description:
			'Why cold-pressed oils retain more nutrients and how to use them for sautéing, dressings, and more.',
		image:
			'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop',
		category: 'Oils',
	},
	{
		id: 3,
		title: 'Raw Honey vs. Processed Honey: What You Should Know',
		description:
			'Natural enzymes, pollen, and flavor notes that make raw honey a better daily pick.',
		image:
			'https://images.unsplash.com/photo-1596649299486-3f2c8b423168?q=80&w=1400&auto=format&fit=crop',
		category: 'Honey',
	},
	{
		id: 4,
		title: 'Spices from Farm to Kitchen: How We Keep Them Fresh',
		description:
			'Sourcing, sun-drying, and small-batch grinding to preserve essential oils and aroma in your masalas.',
		image:
			'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1400&auto=format&fit=crop',
		category: 'Spices',
	},
	{
		id: 5,
		title: 'Sustainable Farming Practices Behind Our Staples',
		description:
			'Soil health, water conservation, and biodiversity: how responsible farming improves everyday staples.',
		image:
			'https://images.unsplash.com/photo-1598940190729-d23a6eb88b02?q=80&w=1400&auto=format&fit=crop',
		category: 'Farming',
	},
	{
		id: 6,
		title: 'Smart Storage for Grains & Pulses at Home',
		description:
			'Practical tips to keep staples fresh longer—right containers, humidity control, and pantry hygiene.',
		image:
			'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1400&auto=format&fit=crop',
		category: 'Staples',
	},
]

// Map category to card/badge colors using our palette
function themeFor(category: Blog['category']) {
	// Card background: sage (#BCD6C7) or light rose (#FCEDEA)
	// Badge background: lighter tint of the same family
	switch (category) {
		case 'Ghee':
		case 'Oils':
		case 'Staples':
			return { card: '#BCD6C7', badge: '#DCE7E0' }
		case 'Honey':
		case 'Spices':
		case 'Farming':
			return { card: '#FCEDEA', badge: '#FEF3F1' }
		default:
			return { card: '#FCEDEA', badge: '#FEF3F1' }
	}
}

const BlogCard = ({ item }: { item: Blog }) => {
	const colors = themeFor(item.category)
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
