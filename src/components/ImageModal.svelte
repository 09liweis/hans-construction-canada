<script lang="ts">
  export let images: string[] = [];
  export let isOpen: boolean = false;
  export let initialIndex: number = 0;
  
  let selectedImage: string | null = null;
  let selectedImageIndex = 0;
  
  $: if (isOpen && images.length > 0) {
    selectedImage = images[initialIndex];
    selectedImageIndex = initialIndex;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  } else {
    selectedImage = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
  
  function closeModal() {
    isOpen = false;
  }
  
  function navigateImage(direction: 'prev' | 'next') {
    if (images.length <= 1) return;
    
    if (direction === 'prev') {
      selectedImageIndex = selectedImageIndex > 0 
        ? selectedImageIndex - 1 
        : images.length - 1;
    } else {
      selectedImageIndex = selectedImageIndex < images.length - 1 
        ? selectedImageIndex + 1 
        : 0;
    }
    
    selectedImage = images[selectedImageIndex];
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (!isOpen) return;
    
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') navigateImage('prev');
    if (event.key === 'ArrowRight') navigateImage('next');
  }
  
  import { onMount, onDestroy } from 'svelte';
  
  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown);
    }
  });
  
  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

{#if isOpen && selectedImage}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" 
    onclick={closeModal}
    onkeydown={(e) => { if (e.key === 'Escape') closeModal(); }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
  >
    <!-- Close button -->
    <button 
      onclick={closeModal}
      class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      aria-label="Close modal"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <!-- Navigation buttons -->
    {#if images.length > 1}
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
    <div class="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
      <h2 id="modal-title" class="sr-only">Image Gallery Modal</h2>
      {selectedImageIndex + 1} / {images.length}
    </div>
    
    <!-- Main image -->
    <button 
      type="button"
      class="flex items-center justify-center w-full h-full p-4 cursor-default" 
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') e.stopPropagation(); }}
      aria-label="View full size image"
    >
      <img 
        src={selectedImage} 
        alt=""
        class="max-w-full max-h-full object-contain"
        style="object-fit: contain;"
      />
    </button>
  </div>
{/if}