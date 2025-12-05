<script lang="ts">
	import { page } from '$app/stores';
	import { projects } from '$lib/projects';

	const projectId = $page.params.id;
	const project = projects.find(p => p.id === projectId);
</script>

{#if project}
	<div class="min-h-screen bg-gray-50">
		<!-- Back Navigation -->
		<div class="bg-white border-b">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<a href="/projects" class="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
					</svg>
					Back to Projects
				</a>
			</div>
		</div>

		<!-- Project Header -->
		<section class="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
					<div>
						<div class="flex items-center gap-4 mb-4">
							<span class="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
								{project.category}
							</span>
							<span class="text-gray-400">{project.year}</span>
						</div>
						<h1 class="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
						<p class="text-xl text-gray-300 max-w-3xl">{project.description}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Project Gallery -->
		<section class="py-16">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Project Gallery ({project.images.length} photos)</h2>
				
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each project.images as image, index}
						<div class="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
							<div class="aspect-w-16 aspect-h-12 bg-gray-200 h-64 relative overflow-hidden">
								<img 
									src={image} 
									alt="{project.title} - Photo {index + 1}"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
									<svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
									</svg>
								</div>
							</div>
							<div class="p-4">
								<p class="text-sm text-gray-600 font-medium">Photo {index + 1}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Project Details -->
		<section class="py-16 bg-white">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid lg:grid-cols-3 gap-12">
					<div class="lg:col-span-2">
						<h2 class="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
						<div class="prose prose-lg max-w-none">
							<p class="text-gray-600 mb-4">
								This {project.category.toLowerCase()} project at {project.title} represents our commitment to excellence and attention to detail. 
								Completed in {project.year}, this project showcases our expertise in delivering high-quality construction solutions 
								tailored to our clients' specific needs.
							</p>
							<p class="text-gray-600 mb-4">
								Our team worked diligently to ensure every aspect of the project met the highest standards of quality and craftsmanship. 
								From initial planning to final execution, we maintained open communication with the client and adhered to all safety regulations 
								and building codes.
							</p>
							<p class="text-gray-600">
								The successful completion of this project demonstrates our ability to handle complex construction challenges while delivering 
								results that exceed expectations. We take pride in every project we undertake and strive to build lasting relationships 
								with our clients based on trust and exceptional service.
							</p>
						</div>
					</div>
					
					<div>
						<div class="bg-gray-50 rounded-lg p-6">
							<h3 class="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
							<dl class="space-y-3">
								<div>
									<dt class="text-sm font-medium text-gray-500">Location</dt>
									<dd class="text-gray-900">{project.title}</dd>
								</div>
								<div>
									<dt class="text-sm font-medium text-gray-500">Category</dt>
									<dd class="text-gray-900">{project.category}</dd>
								</div>
								<div>
									<dt class="text-sm font-medium text-gray-500">Year Completed</dt>
									<dd class="text-gray-900">{project.year}</dd>
								</div>
								<div>
									<dt class="text-sm font-medium text-gray-500">Total Photos</dt>
									<dd class="text-gray-900">{project.images.length}</dd>
								</div>
							</dl>
							
							<div class="mt-6">
								<a href="/contact" class="w-full block px-6 py-3 bg-orange-600 text-white text-center font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
									Get Similar Project Quote
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="py-20 bg-gradient-to-r from-orange-600 to-red-600">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 class="text-4xl font-bold text-white mb-6">Inspired by This Project?</h2>
				<p class="text-xl text-white/90 mb-8">
					Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/contact" class="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg text-center">
						Get Free Quote
					</a>
					<a href="/projects" class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 text-center">
						View More Projects
					</a>
				</div>
			</div>
		</section>
	</div>
{:else}
	<div class="min-h-screen bg-gray-50 flex items-center justify-center">
		<div class="text-center">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
			<p class="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
			<a href="/projects" class="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
				View All Projects
			</a>
		</div>
	</div>
{/if}