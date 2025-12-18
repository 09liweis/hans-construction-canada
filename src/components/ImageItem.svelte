<script lang="ts">
  export let image: string;
  export let index: number;
  export let total: number;
  export let title: string;
  export let onImageClick: (index: number) => void;
  
  // Optional props for styling
  export let showHoverIcon: boolean = false;
  export let containerClass: string = "";
  export let buttonClass: string = "w-full relative overflow-hidden rounded";
  export let imageClass: string = "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none";
</script>

<div class="group relative overflow-hidden rounded bg-gray-100 h-64 {containerClass}">
  <button 
    type="button"
    onclick={() => onImageClick(index)}
    onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') onImageClick(index); }}
    class="w-full h-full cursor-pointer {buttonClass}"
    aria-label={`View image ${index + 1} of ${total}`}
  >
    <img 
      src={image} 
      alt="{title} - Image {index + 1}"
      class={imageClass}
    />
    
    {#if showHoverIcon}
      <div class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
        </svg>
      </div>
    {/if}
  </button>
</div>