<script>
  import { featuredMenus } from '$lib/menuDataB.js';
</script>

<section class="py-20 px-6 bg-slate-50">
  <div class="max-w-7xl mx-auto">
    <div class="mb-12">
      <span class="text-amber-600 font-semibold tracking-widest uppercase text-sm">Chef's Choice</span>
      <h2 class="text-4xl font-bold text-slate-900 mt-2">오늘의 추천 요리</h2>
      <p class="text-slate-500 mt-4">셰프가 엄선한 신선한 재료로 만든 특별한 메뉴를 만나보세요.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each featuredMenus as item (item.id)}
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
          <div class="h-64 overflow-hidden relative">
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            {#if item.tags.length > 0}
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full shadow-sm">
                  {item.tags[0]}
                </span>
              </div>
            {/if}
          </div>

          <div class="p-8 flex flex-col flex-1">
            <div class="flex justify-between items-start mb-4">
              <div class="flex flex-wrap gap-2">
                {#each item.tags as tag}
                  <span class="px-2 py-0.5 {item.badgeColor} text-[10px] font-bold rounded uppercase">
                    {tag}
                  </span>
                {/each}
              </div>
              <span class="text-slate-900 font-bold font-mono">₩{item.price}</span>
            </div>

            <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
              {item.name}
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
              {item.desc}
            </p>

            <button class="w-full py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
              상세 보기
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>