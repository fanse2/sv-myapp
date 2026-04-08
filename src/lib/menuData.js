// src/lib/menuData.js
export const categories = [
  { id: 'main', label: '메인 요리' },
  { id: 'drink', label: '음료' },
  { id: 'dessert', label: '디저트' }
];

export const menuItems = {
  main: [
    { name: "프리미엄 안심 스테이크", price: "45,000", desc: "최상급 한우와 로즈마리 향의 조화", isRecommended: true },
    { name: "트러플 크림 파스타", price: "22,000", desc: "생트러플을 갈아 넣은 진한 풍미", isRecommended: false },
    { name: "해산물 바질 페스토 리조또", price: "24,000", desc: "신선한 관자와 바질의 신선함", isRecommended: false },
    { name: "구운 연어 스테이크", price: "28,000", desc: "겉은 바삭, 속은 촉촉한 완벽한 조리법", isRecommended: true },
    { name: "버섯 라구 라자냐", price: "20,000", desc: "다양한 버섯과 진한 토마토 소스의 조화", isRecommended: false },
    { name: "허니 글레이즈드 햄", price: "26,000", desc: "달콤한 허니 글레이즈로 완성된 클래식 햄 요리", isRecommended: false }
  ],
  drink: [
    { name: "하우스 레드 와인", price: "12,000", desc: "메인 요리와 어울리는 바디감", isRecommended: false },
    { name: "생맥주 (500ml)", price: "6,000", desc: "부드러운 거품의 라거", isRecommended: true },
    { name: "레몬 에이드", price: "7,000", desc: "생레몬을 직접 착즙한 상큼함", isRecommended: false }
  ],
  dessert: [
    { name: "티라미수", price: "9,000", desc: "마스카포네 치즈의 부드러움", isRecommended: true },
    { name: "계절 과일 소르베", price: "8,000", desc: "천연 과일로 만든 깔끔한 마감", isRecommended: false }
  ]
};