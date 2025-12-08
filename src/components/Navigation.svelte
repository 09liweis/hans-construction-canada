<script lang="ts">
  import { page } from '$app/stores';

  interface NavItem {
    label: string;
    href: string;
    isActive?: (pathname: string) => boolean;
    isButton?: boolean;
  }

  const navItems: NavItem[] = [
    {
      label: 'Home',
      href: '/',
      isActive: (pathname) => pathname === '/'
    },
    {
      label: 'Modular',
      href: '/modular',
      isActive: (pathname) => pathname.startsWith('/modular')
    },
    {
      label: 'Projects',
      href: '/projects',
      isActive: (pathname) => pathname.startsWith('/projects')
    }
  ];

  const ctaButton: NavItem = {
    label: 'Get Quote',
    href: '/contact',
    isButton: true
  };

  let isMobileMenuOpen = false;

  function toggleMobileMenu(): void {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu(): void {
    isMobileMenuOpen = false;
  }
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a 
        href="/" 
        class="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
      >
        <span class="text-2xl font-bold text-orange-600">Hansteel Construction</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded {$page.url.pathname && item.isActive?.($page.url.pathname) ? 'text-orange-600' : ''}"
          >
            {item.label}
          </a>
        {/each}
        
        <a 
          href={ctaButton.href}
          class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          {ctaButton.label}
        </a>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        on:click={toggleMobileMenu}
      >
        {#if isMobileMenuOpen}
          <!-- Close icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        {:else}
          <!-- Hamburger icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMobileMenuOpen}
      <div class="md:hidden border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {#each navItems as item}
            <a 
              href={item.href}
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 {$page.url.pathname && item.isActive?.($page.url.pathname) ? 'text-orange-600 bg-orange-50' : ''}"
              on:click={closeMobileMenu}
            >
              {item.label}
            </a>
          {/each}
          
          <a 
            href={ctaButton.href}
            class="block px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            on:click={closeMobileMenu}
          >
            {ctaButton.label}
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>