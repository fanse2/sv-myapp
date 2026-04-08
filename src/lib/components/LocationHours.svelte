<script>
  import { locationInfo } from '$lib/siteData.js';
</script>

<section class="py-24 px-6 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
      
      <div class="w-full h-[400px] lg:h-auto bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        <iframe
          title="Location Map"
          src={locationInfo.mapUrl}
          class="w-full h-full grayscale-[0.1] contrast-[1.05]"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div class="flex flex-col justify-center">
        <div class="mb-10">
          <h2 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Location & Hours</h2>
          <p class="text-slate-500 text-lg">We are located in the heart of the city. Please schedule an appointment before visiting.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-600 transition-all duration-300">
            <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 group-hover:text-white mb-1">Office Address</h4>
            <p class="text-slate-600 text-sm group-hover:text-blue-100 leading-relaxed">{locationInfo.address}</p>
          </div>

          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-600 transition-all duration-300">
            <div class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 class="font-bold text-slate-900 group-hover:text-white mb-1">Contact Details</h4>
            <p class="text-slate-600 text-sm group-hover:text-blue-100">{locationInfo.phone}<br/>{locationInfo.email}</p>
          </div>
        </div>

        <div class="border-t border-slate-100 pt-8">
          <div class="space-y-4">
            {#each locationInfo.hours as item}
              <div class="flex justify-between items-center group">
                <div class="flex flex-col">
                  <span class="text-slate-900 font-semibold">{item.day}</span>
                  {#if item.note}
                    <span class="text-xs text-slate-400 font-medium tracking-wide">{item.note}</span>
                  {/if}
                </div>
                <div class="flex items-center gap-3">
                  <div class="hidden group-hover:block w-8 h-[1px] bg-blue-200"></div>
                  <span class="font-mono text-sm {item.time === 'Closed' ? 'text-rose-500 font-bold' : 'text-slate-600 font-medium'}">
                    {item.time}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>