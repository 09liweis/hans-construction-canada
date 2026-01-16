<script>
  import { colors } from '$lib/colors';
</script>

<svelte:head>
  <title>Contact Us - Hansteel Construction Inc</title>
  <meta name="description" content="Get in touch with Hansteel Construction Inc. Contact us for quotes, consultations, and project inquiries." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-5xl lg:text-6xl font-bold text-white mb-4">
      Get in <span class="text-[#ef4444]">Touch</span>
    </h1>
    <p class="text-xl text-gray-300 max-w-2xl">
      Have a project in mind? We'd love to hear from you. Contact our team for a free consultation.
    </p>
  </div>
</section>

<!-- Contact Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-3 gap-12 mb-16">
      <!-- Address Card -->
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-[#ef4444]/10 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900">Address</h3>
        </div>
        <p class="text-gray-600 ml-16">
          6 Sangster Rd<br />
          Uxbridge, ON L9P 0G5<br />
          Canada
        </p>
      </div>

      <!-- Phone Card -->
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-[#ef4444]/10 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900">Phone</h3>
        </div>
        <p class="text-gray-600 ml-16">
          <a href="tel:+1-905-640-1000" class="hover:text-[#ef4444] transition-colors font-semibold">
            (905) 640-1000
          </a>
        </p>
      </div>

      <!-- Email Card -->
      <div class="flex flex-col">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-[#ef4444]/10 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900">Email</h3>
        </div>
        <p class="text-gray-600 ml-16">
          <a href="mailto:info@hansteelconstruction.com" class="hover:text-[#ef4444] transition-colors">
            info@hansteelconstruction.com
          </a>
        </p>
      </div>
    </div>

    <!-- Hours Section -->
    <div class="bg-gray-50 rounded-lg p-8 mb-16">
      <h2 class="text-2xl font-bold text-slate-900 mb-6">Business Hours</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Monday</span>
            <span class="text-gray-600">8:30 a.m. – 5:30 p.m.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Tuesday</span>
            <span class="text-gray-600">8:30 a.m. – 5:30 p.m.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Wednesday</span>
            <span class="text-gray-600">8:30 a.m. – 5:30 p.m.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Thursday</span>
            <span class="text-gray-600">8:30 a.m. – 5:30 p.m.</span>
          </div>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Friday</span>
            <span class="text-gray-600">8:30 a.m. – 5:30 p.m.</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Saturday</span>
            <span class="text-gray-600">Closed</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-700 font-medium">Sunday</span>
            <span class="text-gray-600">Closed</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div class="h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Hansteel Construction Location Map"
        class="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.8826362088584!2d-79.1505!3d44.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4e5e5e5e5e5e5%3A0x0!2s6%20Sangster%20Rd%2C%20Uxbridge%2C%20ON%20L9P%200G5!5e0!3m2!1sen!2sca!4v1234567890"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-[#ef4444] to-[#dc2626] py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
    <p class="text-lg text-red-100 mb-8">
      Our team is ready to discuss your construction needs and provide expert solutions tailored to your project.
    </p>
    <a
      href="tel:+1-905-640-1000"
      class="inline-block px-8 py-3 bg-white text-[#ef4444] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Call Us Today
    </a>
  </div>
</section>

<style>
  :global(body) {
    scroll-behavior: smooth;
  }
</style>
