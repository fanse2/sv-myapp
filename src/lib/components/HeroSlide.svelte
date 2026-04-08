<script>
  // 슬라이드에 사용할 이미지 데이터
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920",
      title: "마음의 평온을 찾는 공간",
      desc: "지친 일상 속에서 잠시 쉬어갈 수 있는 상담 서비스를 제공합니다."
    },
    {
      url: "https://images.unsplash.com/photo-1545209110-0460b60ce393?auto=format&fit=crop&q=80&w=1920",
      title: "함께 걷는 변화의 길",
      desc: "전문가와 함께 내면의 목소리에 귀를 기울여 보세요."
    },
    {
      url: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1920",
      title: "더 나은 내일을 위한 시작",
      desc: "당신의 마음 건강이 우리 클리닉의 최우선 가치입니다."
    }
  ];

  let currentIndex = $state(0);

  // 5초마다 다음 슬라이드로 전환
  $effect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<section class="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-slate-900">
  {#each slides as slide, i}
    <div
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      style="opacity: {currentIndex === i ? 1 : 0}"
    >
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      <img
        src={slide.url}
        alt={slide.title}
        class="w-full h-full object-cover"
      />
    </div>
  {/each}

  <div class="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white">
    <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
      {slides[currentIndex].title}
    </h1>
    <p class="text-lg md:text-xl text-slate-100 max-w-2xl mb-10 drop-shadow-md">
      {slides[currentIndex].desc}
    </p>
    
    <div class="flex gap-4">
      <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg">
        예약하기
      </button>
      <button class="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full font-semibold transition-all border border-white/50">
        둘러보기
      </button>
    </div>

    <div class="absolute bottom-8 flex gap-2">
      {#each slides as _, i}
        <button
          onclick={() => (currentIndex = i)}
          class="w-3 h-3 rounded-full transition-all {currentIndex === i ? 'bg-white w-8' : 'bg-white/40'}"
          aria-label="슬라이드 이동"
        ></button>
      {/each}
    </div>
  </div>
</section>