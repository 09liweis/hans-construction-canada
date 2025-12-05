<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<span class="text-2xl font-bold text-orange-600">Hans Construction</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a 
					href="/" 
					class="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 {$page.url.pathname.startsWith('/') && !$page.url.pathname.startsWith('/projects') && !$page.url.pathname.startsWith('/contact') ? 'text-orange-600' : ''}"
				>
					Home
				</a>
				<a 
					href="/projects" 
					class="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 {$page.url.pathname.startsWith('/projects') ? 'text-orange-600' : ''}"
				>
					Projects
				</a>
				<a 
					href="/contact" 
					class="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 {$page.url.pathname === '/contact' ? 'text-orange-600' : ''}"
				>
					Contact
				</a>
				<a 
					href="/contact" 
					class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
				>
					Get Quote
				</a>
			</div>

			<!-- Mobile menu button -->
			<button class="md:hidden p-2" aria-label="Toggle mobile menu">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
				</svg>
			</button>
		</div>
	</nav>
</header>