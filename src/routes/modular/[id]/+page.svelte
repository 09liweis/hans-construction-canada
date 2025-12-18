<script lang="ts">
  import { modulars } from '$lib/modulars';
  import { page } from '$app/stores';
  
  $: modular = modulars.find(m => m.id === $page.params.id);
  
  let selectedImage: string | null = null;
  let selectedImageIndex = 0;
  
  function openImageModal(image: string, index: number) {
    selectedImage = image;
    selectedImageIndex = index;
    document.body.style.overflow = 'hidden';
  }
  
  function closeImageModal() {
    selectedImage = null;
    document.body.style.overflow = 'auto';
  }
  
  function navigateImage(direction: 'prev' | 'next') {
    if (!modular) return;
    
    if (direction === 'prev') {
      selectedImageIndex = selectedImageIndex > 0 
        ? selectedImageIndex - 1 
        : modular.images.length - 1;
    } else {
      selectedImageIndex = selectedImageIndex < modular.images.length - 1 
        ? selectedImageIndex + 1 
        : 0;
    }
    
    selectedImage = modular.images[selectedImageIndex];
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (!selectedImage) return;
    
    if (event.key === 'Escape') closeImageModal();
    if (event.key === 'ArrowLeft') navigateImage('prev');
    if (event.key === 'ArrowRight') navigateImage('next');
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
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
        {#each modular.images as image, index (image)}
          <div class="group relative overflow-hidden rounded bg-gray-100">
            <button 
              type="button"
              onclick={() => openImageModal(image, index)}
              onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') openImageModal(image, index); }}
              class="w-full cursor-pointer h-64 relative overflow-hidden rounded"
              aria-label={`View image ${index + 1} of ${modular.images.length}`}
            >
              <img 
                src={image} 
                alt="{modular.title} - Image {index + 1}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </section>

<!-- Image Modal -->
{#if selectedImage}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" 
    onclick={closeImageModal}
    onkeydown={(e) => { if (e.key === 'Escape') closeImageModal(); }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <!-- Close button -->
    <button 
      onclick={closeImageModal}
      class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      aria-label="Close modal"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <!-- Navigation buttons -->
    {#if modular && modular.images.length > 1}
      <button 
        onclick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
        aria-label="Previous image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onclick={(e) => { e.stopPropagation(); navigateImage('next'); }}
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
        aria-label="Next image"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    {/if}
    
    <!-- Image counter and title -->
    {#if modular}
      <div class="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
        <h2 id="modal-title" class="sr-only">Image Gallery Modal</h2>
        {selectedImageIndex + 1} / {modular.images.length}
      </div>
    {/if}
    
    <!-- Main image -->
    <button 
      type="button"
      class="max-w-full max-h-full object-contain cursor-default" 
      onclick={(e) => e.stopPropagation()}
      aria-label="View full size image"
    >
      <img 
        src={selectedImage} 
        alt=""
        class="max-w-full max-h-full object-contain"
      />
    </button>
  </div>
{/if}

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