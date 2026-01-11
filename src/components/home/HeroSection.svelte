<script>
  import { colors } from '$lib/colors';
</script>

<section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="text-center lg:text-left">
        <div class="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
          <span class="text-[#ef4444] text-sm font-medium">🏗️ Hans International Group Division</span>
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span class="text-[#ef4444]">Hansteel</span> Construction Inc
        </h1>
        
        <p class="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
          Professional construction excellence delivering innovative solutions across all project phases. Trusted expertise in pre-construction, design-build, construction services, and post-construction support.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
          <a href="/contact" class="px-8 py-4 bg-[#dc2626] text-white font-semibold rounded-lg hover:bg-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
            Get Free Consultation
          </a>
          <a href="/projects" class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 text-center">
            View Our Work
          </a>
        </div>
        
        <!-- Trust Indicators -->
        <div class="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Licensed & Bonded
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            30+ Years Experience
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Quality Assured
          </div>
        </div>
      </div>
      
      <!-- Right Content - Stats Cards -->
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <div class="text-4xl font-bold text-[#ef4444] mb-2">500+</div>
          <div class="text-white font-medium">Projects Completed</div>
          <div class="text-gray-400 text-sm mt-1">Across Canada</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <div class="text-4xl font-bold text-[#ef4444] mb-2">25+</div>
          <div class="text-white font-medium">Years Experience</div>
          <div class="text-gray-400 text-sm mt-1">Industry Leader</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <div class="text-4xl font-bold text-[#ef4444] mb-2">100%</div>
          <div class="text-white font-medium">Client Satisfaction</div>
          <div class="text-gray-400 text-sm mt-1">Guaranteed</div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
          <div class="text-4xl font-bold text-[#ef4444] mb-2">24/7</div>
          <div class="text-white font-medium">Support</div>
          <div class="text-gray-400 text-sm mt-1">Available</div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div class="animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </div>
</section>
