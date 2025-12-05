<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<section class="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h1 class="text-5xl font-bold mb-6">Our Projects</h1>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				Browse our portfolio of completed construction projects showcasing our commitment to quality and excellence.
			</p>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each projects as project}
					<a href="/projects/{project.id}" class="block bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
						<div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-orange-400 to-red-500 h-48 relative overflow-hidden">
							<img 
								src={project.images[0]} 
								alt={project.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="hidden w-full h-full items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
								<div class="text-center text-white">
									<svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
									</svg>
									<p class="text-sm font-medium">{project.title}</p>
								</div>
							</div>
						</div>
						<div class="p-6">
							<div class="flex items-center justify-between mb-4">
								<span class="text-sm text-orange-600 font-semibold">{project.category}</span>
								<span class="text-sm text-gray-500">{project.year}</span>
							</div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
							<p class="text-gray-600 mb-4">{project.description}</p>
							<div class="flex items-center text-orange-600 font-semibold">
								View Project ({project.images.length} photos)
								<svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
								</svg>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-gradient-to-r from-orange-600 to-red-600">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-4xl font-bold text-white mb-6">Have a Project in Mind?</h2>
			<p class="text-xl text-white/90 mb-8">
				Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/contact" class="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-center">
					Get Free Quote
				</a>
				<button class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
					View More Projects
				</button>
			</div>
		</div>
	</section>
</div>