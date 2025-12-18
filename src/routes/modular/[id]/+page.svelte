<script lang="ts">
  import { modulars } from '$lib/modulars';
  import { page } from '$app/stores';
  
  $: modular = modulars.find(m => m.id === $page.params.id);
</script>

{#if modular}
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
    <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <nav class="mb-4">
          <a href="/modular" class="text-primary hover:text-primary-300 transition-colors">
            ← Back to Modular Projects
          </a>
        </nav>
        <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6">
          {modular.title}
        </h1>
        <p class="text-xl text-gray-300">
          {modular.images?.length || 0} images in this project
        </p>
      </div>
    </div>
  </section>

  <!-- Image Gallery -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each modular.images as image (image)}
          <div class="group relative overflow-hidden rounded bg-gray-100">
            <img 
              src={image} 
              alt="{modular.title} - Image"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{:else}
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Modular Project Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">
        The modular project you're looking for doesn't exist.
      </p>
      <a href="/modular" class="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
        View All Modular Projects
      </a>
    </div>
  </section>
{/if}