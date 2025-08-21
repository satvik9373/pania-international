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
		image: '/product-image/ghee.png',
		category: 'Ghee',
	},
	{
		id: 2,
		title: 'Cold-Pressed Oils: Benefits and Best Uses in Daily Cooking',
		description:
			'Why cold-pressed oils retain more nutrients and how to use them for sautéing, dressings, and more.',
		image: '/product-image/Mustard-Oil.webp',
		category: 'Oils',
	},
	{
		id: 3,
		title: 'Raw Honey vs. Processed Honey: What You Should Know',
		description:
			'Natural enzymes, pollen, and flavor notes that make raw honey a better daily pick.',
		image: '/product-image/honey.jpg',
		category: 'Honey',
	},
	{
		id: 4,
		title: 'Spices from Farm to Kitchen: How We Keep Them Fresh',
		description:
			'Sourcing, sun-drying, and small-batch grinding to preserve essential oils and aroma in your masalas.',
		image: '/product-image/black-saltkala-namak-powder-100-g-quick-pantry.jpg',
		category: 'Spices',
	},
	{
		id: 5,
		title: 'Sustainable Farming Practices Behind Our Staples',
		description:
			'Soil health, water conservation, and biodiversity: how responsible farming improves everyday staples.',
		image: '/product-image/basmati rice.jpg',
		category: 'Farming',
	},
	{
		id: 6,
		title: 'Smart Storage for Grains & Pulses at Home',
		description:
			'Practical tips to keep staples fresh longer—right containers, humidity control, and pantry hygiene.',
		image: '/product-image/wheat-flour.jpg',
		category: 'Staples',
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
