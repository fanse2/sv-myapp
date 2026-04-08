<script>
  import { drinkList } from '$lib/menuDataC.js';
</script>

<section class="py-24 px-6 bg-slate-950 text-slate-200">
  <div class="max-w-3xl mx-auto border border-slate-800 p-8 md:p-20 rounded-sm relative">
    <div class="absolute top-6 left-6 w-10 h-10 border-t border-l border-slate-700 opacity-50"></div>
    <div class="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-slate-700 opacity-50"></div>

    <div class="text-center mb-20">
      <span class="text-amber-500/80 text-xs tracking-[0.3em] uppercase font-medium">Exclusive Selection</span>
      <h2 class="font-serif text-4xl text-amber-500 mt-4 tracking-widest uppercase">Wine & Spirit</h2>
    </div>

    <div class="space-y-10">
      {#each drinkList as item (item.id)}
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 group">
          <div class="flex-1 w-full">
            <div class="flex items-center gap-4">
              <span class="text-xl md:text-2xl font-serif text-slate-100 group-hover:text-amber-400 transition-colors">
                {item.name}
              </span>
              <span class="hidden md:block flex-1 border-b border-slate-800 border-dashed mb-2 opacity-40"></span>
            </div>
            <p class="text-sm text-slate-500 mt-1 italic tracking-wide">
              {item.origin} · {item.year}
            </p>
          </div>
          
          <div class="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end border-t border-slate-900 md:border-none pt-2 md:pt-0">
            <span class="md:hidden text-[10px] text-slate-600 uppercase tracking-widest font-bold">Price</span>
            <span class="text-xl font-mono text-amber-500 font-medium">${item.price}</span>
          </div>
        </div>
      {/each}
    </div>

    <p class="text-center text-slate-600 text-[10px] mt-20 tracking-tighter uppercase italic">
      * All prices are inclusive of VAT. Vintage may vary based on availability.
    </p>
  </div>
</section>