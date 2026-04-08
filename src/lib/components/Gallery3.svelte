<script>
  import { galleryImages } from '$lib/galleryData.js';
  
  let scrollContainer = $state();
  let showLeftButton = $state(false);

  // 스크롤 위치에 따라 왼쪽 버튼 노출 여부 결정
  const handleScroll = (e) => {
    showLeftButton = e.target.scrollLeft > 10;
  };

  const scroll = (direction) => {
    if (scrollContainer) {
      // 사진이 커졌으므로 화면 너비의 약 70%만큼 이동 (더 부드러운 전환)
      const scrollAmount = scrollContainer.clientWidth * 0.7;
      scrollContainer.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
</script>

<section class="py-16 bg-[#141414] overflow-hidden group/section">
  <div class="max-w-[1600px] mx-auto px-16 mb-6">
    <h2 class="text-2xl md:text-3xl font-extrabold text-[#e5e5e5] hover:text-white cursor-pointer transition-colors inline-flex items-center gap-3 tracking-tight">
      Explore Our Space-Gallery3
      <span class="text-sm text-cyan-400 opacity-0 group-hover/section:opacity-100 transition-opacity mt-2 font-medium">View All Concepts ›</span>
    </h2>
  </div>

  <div class="relative px-16">
    {#if showLeftButton}
      <button 
        onclick={() => scroll('left')}
        class="absolute left-0 top-0 bottom-0 z-30 w-16 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover/section:opacity-100 transition-all flex items-center justify-center"
        aria-label="Scroll Left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    {/if}

    <button 
      onclick={() => scroll('right')}
      class="absolute right-0 top-0 bottom-0 z-30 w-16 bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover/section:opacity-100 transition-all flex items-center justify-center"
      aria-label="Scroll Right"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7" />
        </svg>
    </button>

    <div 
      bind:this={scrollContainer}
      onscroll={handleScroll}
      class="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
    >
      {#each galleryImages as image (image.id)}
        <div class="flex-none w-[280px] sm:w-[380px] md:w-[450px] snap-start relative group cursor-pointer">
          <div class="aspect-video rounded-lg overflow-hidden bg-[#2f2f2f] shadow-lg border border-[#2f2f2f]">
            <img 
              src={image.url} 
              alt={image.title} 
              class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
            />
          </div>
          
          <div class="mt-4 px-1">
            <h4 class="text-base md:text-lg font-bold text-[#e5e5e5] group-hover:text-white transition-colors leading-tight">
              {image.title}
            </h4>
            <div class="flex items-center gap-3 mt-1.5">
              <span class="text-xs text-cyan-400 font-semibold">Tranquil Environment</span>
              <span class="text-xs px-1.5 py-0.5 border border-slate-700 text-slate-400 uppercase font-medium tracking-wider">{image.category}</span>
            </div>
          </div>
        </div>
      {/each}
      
      <div class="flex-none w-16"></div>
    </div>
  </div>
</section>

<style>
  /* 스크롤바 숨기기 표준 */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>