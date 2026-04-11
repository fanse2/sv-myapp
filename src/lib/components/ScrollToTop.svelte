<script>
  let showButton = $state(false);

  // 스크롤 위치 감지 함수
  function handleScroll() {
    showButton = window.scrollY > 300;
  }

  // 맨 위로 부드럽게 이동
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<svelte:window onscroll={handleScroll} />

{#if showButton}
  <button
    onclick={scrollToTop}
    class="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 active:scale-95"
    aria-label="맨 위로 이동"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
{/if}

<style>
  /* 필요한 경우 추가 스타일링 */
</style>