<script>
  import { galleryImages } from '$lib/galleryData.js';
  import { fade } from 'svelte/transition';
</script>

<section id = "gallery" class="py-24 px-6 bg-slate-50">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <span class="text-blue-600 font-semibold tracking-widest uppercase text-sm">Our Space</span>
      <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">Clinic Gallery</h2>
      <p class="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">Take a virtual tour of our tranquil and private facilities designed for your comfort and healing journey.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
      {#each galleryImages as image (image.id)}
        <div class="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 {image.span}">
          <img 
            src={image.url} 
            alt={image.title} 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
            <span class="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              {image.category}
            </span>
            <h4 class="text-xl md:text-2xl font-bold text-white transition-transform duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
              {image.title}
            </h4>
          </div>

          <div class="absolute inset-0 border border-black/5 rounded-3xl group-hover:border-black/10 transition-colors"></div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-20">
      <button class="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
        View More Photos
      </button>
    </div>
  </div>
</section>