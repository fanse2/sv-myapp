<script>
  import { fade, slide } from 'svelte/transition';

  // 메뉴 열림/닫힘 상태 관리
  let isMenuOpen = $state(false);

  const navLinks = [
    { name: '서비스 소개', href: '#features' },
    { name: '클리닉 안내', href: '#about' },
    { name: '진료 시간', href: '#hours' },
    { name: '오시는 길', href: '#location' }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
  <nav class="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2 group" onclick={closeMenu}>
      <div class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
        <span class="text-white text-xl font-bold">C</span>
      </div>
      <span class="font-bold text-xl text-slate-900 tracking-tight">MIND CLINIC</span>
    </a>

    <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
      {#each navLinks as link}
        <li>
          <a href={link.href} class="hover:text-blue-600 transition-colors">{link.name}</a>
        </li>
      {/each}
    </ul>

    <div class="hidden md:flex items-center gap-4">
      <button class="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95">
        예약하기
      </button>
    </div>

    <button 
      class="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
      onclick={toggleMenu}
      aria-label="메뉴 열기"
    >
      {#if !isMenuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {/if}
    </button>
  </nav>

  {#if isMenuOpen}
    <div 
      transition:slide={{ duration: 300 }} 
      class="md:hidden bg-white border-b border-slate-100 overflow-hidden"
    >
      <ul class="px-6 py-4 space-y-4">
        {#each navLinks as link}
          <li>
            <a 
              href={link.href} 
              class="block text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onclick={closeMenu}
            >
              {link.name}
            </a>
          </li>
        {/each}
        <li class="pt-4 border-t border-slate-50">
          <button class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg">
            지금 예약하기
          </button>
        </li>
      </ul>
    </div>
  {/if}
</header>