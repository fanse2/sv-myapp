<script>
  import { categories, menuItems } from '$lib/menuData.js';
  import { fade } from 'svelte/transition';

  // 현재 선택된 카테고리 상태 (기본값: 첫 번째 카테고리 ID)
  let activeCategoryId = $state(categories[0].id);

  // 현재 카테고리에 해당하는 메뉴 목록 계산 (derived logic)
  let currentMenus = $derived(menuItems[activeCategoryId] || []);
</script>

<section class="py-20 px-6 bg-white">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-serif font-bold text-slate-900 mb-2">Our Menu</h2>
      <div class="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
    </div>

    <div class="flex justify-center gap-6 md:gap-12 mb-12 border-b border-slate-100 pb-4 overflow-x-auto whitespace-nowrap">
      {#each categories as category}
        <button 
          onclick={() => activeCategoryId = category.id}
          class="pb-2 px-1 font-medium transition-all relative {activeCategoryId === category.id ? 'text-amber-600' : 'text-slate-400 hover:text-slate-600'}"
        >
          {category.label}
          {#if activeCategoryId === category.id}
            <div class="absolute bottom-[-1px] left-0 w-full h-0.5 bg-amber-600" transition:fade></div>
          {/if}
        </button>
      {/each}
    </div>

    <div class="grid md:grid-cols-2 gap-x-16 gap-y-10">
      {#each currentMenus as item (item.name)}
        <div class="group" in:fade={{ duration: 300 }}>
          <div class="flex justify-between items-baseline mb-1">
            <h3 class="font-bold text-slate-800 group-hover:text-amber-600 transition-colors flex items-center gap-2">
              {item.name}
              {#if item.isRecommended}
                <span class="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded uppercase tracking-tighter">Best</span>
              {/if}
            </h3>
            <span class="text-amber-600 font-mono font-semibold">₩{item.price}</span>
          </div>
          <p class="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          <div class="mt-3 border-b border-dashed border-slate-200 opacity-50"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* 스크롤바 숨기기 (모바일 탭용) */
  div::-webkit-scrollbar {
    display: none;
  }
</style>