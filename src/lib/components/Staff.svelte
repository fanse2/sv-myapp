<script>
  import { staffList } from '$lib/staffData.js';
</script>

<section class="py-24 px-6 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="max-w-2xl mb-16">
      <span class="text-blue-600 font-bold tracking-widest uppercase text-sm">Expert Team</span>
      <h2 class="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Meet Our Specialists</h2>
      <p class="text-slate-500 text-lg mt-6">우리의 팀은 각 분야의 숙련된 전문가들로 구성되어 있습니다. 당신의 여정을 함께할 파트너를 만나보세요.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each staffList as member (member.id)}
        <div class="group">
          <div class="relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-6">
            <img 
              src={member.imageUrl} 
              alt={member.name} 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            <div class="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div class="flex gap-2">
                <a href={member.social.linkedin} class="flex-1 bg-white/90 backdrop-blur-md py-3 rounded-xl text-center text-sm font-bold text-slate-900 hover:bg-blue-600 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href={member.social.instagram} class="px-4 bg-white/90 backdrop-blur-md py-3 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                   IG
                </a>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-blue-600 uppercase tracking-tighter">{member.role}</span>
              <div class="h-[1px] w-8 bg-slate-200"></div>
            </div>
            <h3 class="text-2xl font-bold text-slate-900">{member.name}</h3>
            <p class="text-sm font-medium text-slate-400 italic mb-3">{member.specialty}</p>
            <p class="text-slate-600 text-sm leading-relaxed line-clamp-2">
              {member.bio}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>