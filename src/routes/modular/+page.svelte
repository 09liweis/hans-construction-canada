<script lang="ts">
  import { modulars } from '$lib/modulars';
</script>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6">
        <span class="text-primary">Modular</span> Construction
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">
        Explore our innovative modular construction projects with precision engineering and modern design solutions.
      </p>
    </div>
  </div>
</section>

<!-- Modular Projects Grid -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each modulars as modular (modular.id)}
        <div class="group bg-white border border-gray-200 rounded overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary-500">
          <a href="/modular/{modular.id}">
            <div class="aspect-video bg-gray-100 overflow-hidden">
              {#if modular.images?.[0]}
                <img 
                  src={modular.images[0]} 
                  alt="{modular.title} project"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              {/if}
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{modular.title}</h3>
              <p class="text-gray-600 mb-4">
                {modular.images?.length || 0} images
              </p>
              <div class="flex items-center text-primary font-semibold hover:text-primary-700">
                View Gallery
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>