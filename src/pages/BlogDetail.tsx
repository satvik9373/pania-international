import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { blogs } from '../data/blogs'

const BlogDetail = () => {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	const blog = blogs.find(b => b.id === parseInt(id || '0'))

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h1>
					<button
						onClick={() => navigate('/')}
						className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
					>
						Back to Home
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Back Button */}
			<div className="max-w-4xl mx-auto px-4 py-6">
				<button
					onClick={() => navigate('/')}
					className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-6"
				>
					<ArrowLeft size={20} />
					<span>Back to Blogs</span>
				</button>
			</div>

			{/* Blog Content */}
			<article className="max-w-4xl mx-auto px-4 pb-16">
				{/* Header Image */}
				<div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
					<img
						src={blog.image}
						alt={blog.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-40"></div>

					{/* Title Overlay */}
					<div className="absolute bottom-6 left-6 right-6">
						<span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
							{blog.category}
						</span>
						<h1 className="text-2xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Coolvetica, sans-serif' }}>
							{blog.title}
						</h1>
					</div>
				</div>

				{/* Content */}
				<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
					<div className="prose prose-lg max-w-none">
						{blog.content.split('\n\n').map((paragraph, index) => {
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
							} else if (paragraph.match(/^\d+\./)) {
								// Handle numbered lists
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
			</article>
		</div>
	)
}

export default BlogDetail