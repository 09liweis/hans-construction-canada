<script lang="ts">
  import { page } from '$app/stores';
  import { projects } from '$lib/projects';
  import ImageModal from '../../../components/ImageModal.svelte';
  import ImageItem from '../../../components/ImageItem.svelte';

  const projectId = $page.params.id;
  const project = projects.find(p => p.id === projectId);
  
  let isModalOpen = false;
  let modalInitialIndex = 0;
  
  function openImageModal(index: number) {
    modalInitialIndex = index;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
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
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold">{project.title}</h1>
        </div>
      </div>
    </section>

    <!-- Project Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Project Gallery ({project.images.length} photos)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each project.images as image, index}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <ImageItem 
                image={image}
                index={index}
                total={project.images.length}
                title={project.title}
                onImageClick={openImageModal}
                showHoverIcon={true}
                buttonClass="w-full"
              />
              <div class="p-4">
                <p class="text-sm text-gray-600 font-medium">Photo {index + 1}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <ImageModal 
      images={project.images}
      isOpen={isModalOpen}
      initialIndex={modalInitialIndex}
      onClose={closeModal}
    />

    <!-- Project Information -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gray-50 rounded-lg p-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Project Information</h3>
          <dl class="space-y-4">
            <div>
              <dt class="text-sm font-medium text-gray-500">Location</dt>
              <dd class="text-lg text-gray-900">{project.title}</dd>
            </div>
            <div>
              <dt class="text-sm font-medium text-gray-500">Total Photos</dt>
              <dd class="text-lg text-gray-900">{project.images.length}</dd>
            </div>
          </dl>
          
          <div class="mt-8">
            <a href="/contact" class="inline-block px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300">
              Get Similar Project Quote
            </a>
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