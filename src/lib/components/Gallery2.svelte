<script>
  import { galleryImages } from '$lib/galleryData.js';
  
  let scrollContainer = $state();

  // 버튼 클릭 시 좌우로 스크롤 이동
  const scroll = (direction) => {
    if (scrollContainer) {
      const scrollAmount = 400; // 한 번 클릭 시 이동할 거리
      scrollContainer.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
</script>

<section class="py-20 bg-slate-950 overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
    <div>
      <span class="text-blue-500 font-bold tracking-widest uppercase text-xs">Featured Space</span>
      <h2 class="text-3xl font-bold text-white mt-2">Gallery Tour</h2>
    </div>
    
    <div class="hidden md:flex gap-2">
      <button 
        onclick={() => scroll('left')}
        class="p-3 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition-all"
        aria-label="Scroll Left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onclick={() => scroll('right')}
        class="p-3 rounded-full border border-slate-700 text-white hover:bg-slate-800 transition-all"
        aria-label="Scroll Right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  <div 
    bind:this={scrollContainer}
    class="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-[calc((100vw-80rem)/2)] no-scrollbar"
  >
    {#each galleryImages as image (image.id)}
      <div class="flex-none w-[280px] md:w-[400px] snap-start group cursor-pointer">
        <div class="relative aspect-video rounded-xl overflow-hidden mb-3">
          <img 
            src={image.url} 
            alt={image.title} 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        </div>
        <div>
          <h4 class="text-white font-semibold text-lg">{image.title}</h4>
          <p class="text-slate-500 text-sm">{image.category}</p>
        </div>
      </div>
    {/each}
    
    <div class="flex-none w-10"></div>
  </div>
</section>

<style>
  /* 스크롤바 숨기기 */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>