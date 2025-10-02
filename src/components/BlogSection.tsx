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
		content: `In an era where ultra-processed foods dominate, ancient grains are making a powerful comeback. Among these, Khapli wheat (also known as Emmer wheat) stands apart. This heritage grain offers a compelling blend of nutrients, digestibility, and flavor that modern wheat often cannot match. At Pania International, we're committed to reintroducing this timeless grain through quality milling, honest sourcing, and transparent storytelling.

**What Is Khapli (Emmer) Wheat?**

Khapli wheat is one of the oldest cultivated wheat species, with roots traced back to the Fertile Crescent in the Middle East. Over centuries, it found a place in traditional Indian agriculture, especially in regions valuing rustic, resilient crops. Unlike modern high-yield wheat varieties, Khapli has retained many of its natural traits: compact grain, reddish hue, hardy growth, and a deep nutritional core.

**Nutritional Strengths & Health Benefits**

1. **Rich in Fiber & Digestion Support** - The high dietary fiber in Khapli slows digestion, helps maintain regularity, and supports a healthy gut microbiome. Because it's processed more gently, much of the bran and beneficial fiber remains intact.

2. **Lower Glycemic Index** - Khapli wheat is naturally assimilated more slowly, which helps stabilize blood sugar levels—making it a better option for those managing glucose or prediabetic tendencies.

3. **"Gluten-Light" & Protein Digestibility** - While Khapli still contains gluten, its gluten structure is less aggressive than modern wheat, which may make it more tolerable for people with mild gluten sensitivity.

4. **Antioxidants & Micronutrients** - Khapli packs in antioxidants, minerals like magnesium and iron, and beta-carotene (provitamin A) — nutrients often lost in modern wheat processing.

5. **Resistant Starch & Metabolic Health** - Being a legacy grain, Khapli contains higher resistant starch—this portion of starch bypasses digestion in the small intestine and nourishes beneficial gut bacteria.

**Why Khapli Over Modern Wheat?**

While modern wheat offers high yield and ease, it often comes at the expense of flavor, nutrition, and digestibility. Khapli, on the other hand, preserves characteristics that many modern varieties have lost. At Pania International, we see Khapli not just as a product but as a movement to restore food integrity.`
	},
	{
		id: 2,
		title: 'The Sacred Essence of Sambrani Dhup Cups: Purity, Calmness, and Spiritual Energy',
		description:
			'Lighting a Sambrani Dhup Cup has been a timeless tradition in Indian homes, temples, and meditation spaces. Known for its purifying aroma and calming properties, sambrani creates an atmosphere of peace.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Spiritual & Wellness',
		content: `Lighting a Sambrani Dhup Cup has been a timeless tradition in Indian homes, temples, and meditation spaces. Known for its purifying aroma and calming properties, sambrani has long been considered a natural way to cleanse the aura, uplift the mind, and create an atmosphere of peace.

At Pania International, we believe sambrani dhup cups are not just incense products, but sacred companions that bring balance, serenity, and positivity to everyday life.

**What Are Sambrani Dhup Cups?**

Sambrani dhup cups are made by blending natural resins, herbs, and aromatic wood powders with a charcoal base, shaped into ready-to-use cups. Once lit, they release rich, fragrant smoke that slowly spreads through the surroundings, creating an aura of calmness and sanctity.

**Benefits of Sambrani Dhup Cups**

• **Aura Cleansing** - The smoke from sambrani is traditionally believed to remove negative energies and restore positivity.

• **Purification of Air** - Sambrani smoke carries natural cleansing properties and is often used during pooja and havan rituals.

• **Meditation and Focus** - Lighting a sambrani dhup cup before meditation helps create the perfect spiritual atmosphere.

• **Stress Relief and Relaxation** - The gentle aroma helps reduce stress, relaxes the nervous system, and promotes tranquility.

• **Support for Better Sleep** - The calming effect helps prepare the mind and body for rest.

**How to Use Sambrani Dhup Cups**

• Place the cup on a heat-safe surface or plate
• Light the rim until it begins to smolder  
• Allow the fragrant smoke to fill your space
• Use during pooja, meditation, yoga, or relaxation
• Ensure proper ventilation and never leave unattended

A Sambrani Dhup Cup is more than just incense — it's a spiritual experience that purifies the air, cleanses the aura, and brings peace to both home and heart.`
	},
	{
		id: 3,
		title: 'Virgin & Extra Virgin Olive Oil — Pure Goodness, Naturally',
		description:
			'When it comes to wellness and taste, extra virgin olive oil (EVOO) stands apart as a natural elixir. We bring you virgin and extra virgin olive oil sourced from trusted producers, carefully packaged to preserve freshness.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Health',
		content: `When it comes to wellness and taste, extra virgin olive oil (EVOO) stands apart as a natural elixir. At Pania International, we bring you virgin and extra virgin olive oil sourced from trusted producers, carefully packaged to preserve freshness and authenticity.

**What Makes Virgin & Extra Virgin Olive Oil Special?**

Unlike refined oils, EVOO is extracted through cold pressing—using no chemicals or heat—ensuring the oil retains its natural antioxidants, polyphenols, and vitamins. Its rich aroma, fruity flavor, and golden-green color make it both a culinary delight and a wellness staple.

**Health Benefits of Virgin & Extra Virgin Olive Oil**

• **Rich in Antioxidants** - Contains powerful polyphenols and flavonoids that fight oxidative stress and support healthy aging.

• **Heart Health** - The monounsaturated fats in EVOO help reduce bad cholesterol, support arterial health, and promote better circulation.

• **Brain & Cognitive Support** - Regular consumption may improve memory and focus due to its neuroprotective compounds.

• **Skin & Hair Wellness** - Vitamin E and antioxidants nourish skin and hair, protecting from dryness and premature aging.

• **Digestive & Immune Health** - Natural anti-inflammatory properties aid digestion and strengthen the immune system.

**Everyday Uses of Virgin & Extra Virgin Olive Oil**

• Drizzle over salads, pasta, or roasted vegetables
• Use in dips, marinades, and dressings for a rich, fruity touch
• A finishing oil for soups, breads, and Mediterranean dishes
• A natural beauty oil for skin and hair care rituals

At Pania International, we ensure that every bottle of virgin and extra virgin olive oil reflects authentic taste, nutritional richness, and export-ready quality. It's more than just oil—it's nature's gift for a healthier, flavorful life.`
	},
	{
		id: 4,
		title: 'Pomace Olive Oil — The Unsung Hero of High-Heat Cooking',
		description:
			'Pomace olive oil is a versatile, refined oil widely valued for its high smoke point, neutral flavor, and affordability. Perfect for homes, restaurants, and food industries worldwide.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Cooking',
		content: `Pomace olive oil is a versatile, refined oil widely valued for its high smoke point, neutral flavor, and affordability. At Pania International, we provide premium-quality refined pomace olive oil to meet the needs of homes, restaurants, and food industries worldwide.

**What is Pomace Olive Oil?**

Pomace olive oil is obtained from the pulp, skin, and pits left after the first olive pressing. It undergoes a refining process that ensures stability, safety, and purity, resulting in oil that retains the healthy monounsaturated fats olive oil is known for, but with a lighter taste and aroma.

**Benefits of Pomace Olive Oil**

• **High Smoke Point** - Withstanding high temperatures without breaking down, it's ideal for frying, roasting, grilling, and industrial food applications.

• **Heart-Friendly Fats** - Rich in oleic acid, pomace olive oil contributes to cardiovascular wellness and helps maintain balanced cholesterol levels.

• **Neutral Flavor Profile** - Its mild taste doesn't overpower recipes, making it suitable for both traditional dishes and modern cuisines.

• **Affordable Olive Oil Option** - It delivers many of the benefits of olive oil while being cost-effective for daily use.

• **Consistency in Bulk** - Its refined nature ensures uniformity and longer shelf stability—perfect for restaurants and food production.

**Everyday Uses of Pomace Olive Oil**

• Deep frying and sautéing in restaurants or homes
• Baking bread, cookies, or packaged snacks
• A reliable base for infused oils, marinades, and condiments
• Industrial food manufacturing where consistency is crucial

At Pania International, we prioritize purity, reliability, and quality assurance in every batch of pomace olive oil. Whether for home kitchens or large-scale buyers, we deliver oil that supports taste, health, and efficiency.`
	},
	{
		id: 5,
		title: 'Refined Sunflower Oil: The Neutral, High-Heat Cooking Choice',
		description:
			'Sunflower oil is one of the most widely used vegetable oils worldwide, known for its light flavor, versatility, and favorable fat profile that meets strict quality standards for global markets.',
		image: '/Blog Images/A2 BILONA GHEE - BLOG.png',
		category: 'Oils & Cooking',
		content: `Sunflower oil is one of the most widely used vegetable oils worldwide, known for its light flavor, versatility, and favorable fat profile. At Pania International, we supply pure refined sunflower oil that meets strict quality standards for both domestic and export markets.

**What Is Refined Sunflower Oil?**

Refined sunflower oil is extracted from sunflower seeds and undergoes a series of refining steps to improve clarity, stability, and shelf life:
• Degumming removes gums and phospholipids
• Neutralizing eliminates free fatty acids  
• Bleaching reduces pigments and color
• Deodorizing clears unwanted odors

The result is a light, neutral oil with minimal aroma—perfect for high-heat cooking and commercial use.

**Advantages and Uses**

**High Smoke Point** - With a smoke point around 232°C (≈450°F), refined sunflower oil is excellent for frying, deep-frying, roasting, and sautéing.

**Neutral Flavor** - Its clean, flavorless profile makes it ideal for both savory and sweet dishes without overpowering the taste.

**Long Shelf Life** - Refining removes compounds that cause rancidity, giving it greater stability during storage and transport.

**Healthy Fat Composition** - Contains mainly monounsaturated (oleic acid) and polyunsaturated (linoleic acid) fats, along with vitamin E.

**Why Choose Refined Sunflower Oil from Pania International?**

• **Purity and Consistency** through rigorous quality checks
• **High Stability** suitable for frying, processing, and packaging  
• **Bulk and Export Supply** that meets international food safety standards
• **Trusted Sourcing** with transparency from farm to factory

Refined sunflower oil remains a kitchen essential thanks to its neutral taste, high smoke point, and wide usability. For bulk or export orders, partner with Pania International—your trusted supplier of high-quality cooking oils for global markets.`
	},
	{
		id: 6,
		title: 'Essential Oils from India – Pure, Natural & Trusted by the World',
		description:
			'Essential oils are nature\'s most powerful extracts – concentrated drops that capture the true essence, fragrance, and healing properties of plants. We bring you the finest pure essential oils from India.',
		image: '/Blog Images/Essential-oil.webp',
		category: 'Essential Oils & Wellness',
		content: `Essential oils are nature's most powerful extracts – concentrated drops that capture the true essence, fragrance, and healing properties of plants. At Pania International, we bring you the finest pure essential oils from India, produced with care, quality, and sustainability.

India is among the largest producers and exporters of essential oils, with traditional knowledge blending seamlessly with modern extraction technology. This makes Indian essential oils some of the most trusted and demanded across global markets.

**What Makes Essential Oils Special?**

Essential oils are concentrated plant extracts obtained using advanced extraction techniques such as steam distillation and cold pressing. Each oil carries a unique aroma, therapeutic property, and natural benefit.

• **Aromatherapy** - Used worldwide to calm the mind, reduce stress, and promote well-being
• **Skincare & Beauty** - Widely used in cosmetics for their purity and natural healing  
• **Wellness & Home** - Perfect for diffusing at home for a refreshing environment
• **Medicinal & Industrial Use** - Highly valued in herbal medicine and premium product formulations

**Popular Essential Oils We Offer**

• **Lavender Essential Oil** – Relaxing, calming, perfect for sleep and anxiety relief
• **Frankincense Essential Oil** – Known for anti-aging, skincare, and spiritual use
• **Peppermint Oil** – Refreshing and effective for headache and fatigue relief
• **Tea Tree Oil** – Popular in cosmetics for antibacterial and skin-purifying benefits
• **Lemongrass Oil** – Energizing aroma, insect-repellent, and excellent for aromatherapy

**Health Benefits & Uses**

✔ **For Sleep & Anxiety** - Oils like lavender and chamomile help restore calm naturally
✔ **For Skin & Beauty** - Tea tree, frankincense, and sandalwood are used in creams and serums  
✔ **For Headache & Stress Relief** - Peppermint provides cooling relief and reduces tension
✔ **For General Wellness** - Diffusing oils improves air quality and enhances relaxation

**Why Choose Pania International for Essential Oils?**

1. **100% Pure & Natural** – We supply only pure essential oils with no dilution or chemicals
2. **Wide Range** – From lavender to sandalwood, we deliver the best essential oils from India
3. **Wholesale & Bulk Supply** – We fulfill large-volume orders for global brands and distributors
4. **Sustainable Practices** – Ethically sourced using eco-friendly extraction techniques
5. **Global Reach** – Trusted supplier for international buyers seeking authentic Indian oils

Essential oils are not just fragrances—they are natural solutions for health, beauty, and well-being. Partner with us today and experience why the world trusts Indian essential oils for purity, potency, and unmatched benefits.`
	},
]

// Map blog ID to card/badge colors - All green
function themeFor(blogId: number) {
	// All cards will be green
	// Card background: sage (#BCD6C7) for green
	// Badge background: lighter tint of the same family
	return { card: '#BCD6C7', badge: '#DCE7E0' }
}

const BlogCard = ({ item, onClick }: { item: Blog; onClick: () => void }) => {
	const colors = themeFor(item.id)
	return (
		<article
			className="h-full rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden transition group hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] duration-200 ease-out flex flex-col cursor-pointer"
			style={{ backgroundColor: colors.card }}
			onClick={onClick}
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
	const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

	const openBlog = (blog: Blog) => {
		setSelectedBlog(blog)
		document.body.style.overflow = 'hidden' // Prevent background scrolling
	}

	const closeBlog = () => {
		setSelectedBlog(null)
		document.body.style.overflow = 'unset' // Restore scrolling
	}

	return (
		<>
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-3xl sm:text-4xl text-rich-brown font-semibold">Latest Blogs</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
						{blogs.map((b) => (
							<div key={b.id} className="h-full">
								<BlogCard item={b} onClick={() => openBlog(b)} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Blog Modal */}
			<AnimatePresence>
				{selectedBlog && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
						onClick={closeBlog}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Header with Banner Image */}
							<div className="relative h-64 md:h-80">
								<img
									src={selectedBlog.image}
									alt={selectedBlog.title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-40"></div>
								
								{/* Close Button */}
								<button
									onClick={closeBlog}
									className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
								>
									<X size={24} />
								</button>

								{/* Title Overlay */}
								<div className="absolute bottom-6 left-6 right-6">
									<span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
										{selectedBlog.category}
									</span>
									<h1 className="text-2xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
										{selectedBlog.title}
									</h1>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 md:p-8 max-h-96 overflow-y-auto">
								<div className="prose prose-lg max-w-none">
									{selectedBlog.content.split('\n\n').map((paragraph, index) => {
										if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
											// Handle bold headings
											return (
												<h3 key={index} className="text-xl font-bold text-gray-800 mb-4 mt-6" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
													{paragraph.replace(/\*\*/g, '')}
												</h3>
											)
										} else if (paragraph.startsWith('•')) {
											// Handle bullet points
											return (
												<div key={index} className="mb-2">
													<p className="text-gray-700 leading-relaxed">
														{paragraph.replace('•', '•')}
													</p>
												</div>
											)
										} else if (paragraph.startsWith('✔')) {
											// Handle checkmark points
											return (
												<div key={index} className="mb-2">
													<p className="text-gray-700 leading-relaxed">
														{paragraph}
													</p>
												</div>
											)
										} else {
											// Handle regular paragraphs
											return (
												<p key={index} className="text-gray-700 leading-relaxed mb-4">
													{paragraph}
												</p>
											)
										}
									})}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default BlogSection
