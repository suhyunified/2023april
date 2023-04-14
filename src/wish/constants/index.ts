import { CategoryType } from "@/shared/components/Category";

export const WishNewStep = {
  Style: "style",
  Category: "category",
  Contents: "contents",
} as const;
export type WishNewStep = typeof WishNewStep[keyof typeof WishNewStep];

export const STYLE_LIST = {
  [CategoryType.Coin]: [
    "주식 투자왕",
    "부수입이 짭짤한",
    "연봉이 치솟고 있는",
    "자수성가 CEO",
    "경제적 자유를 이룬",
  ],
  [CategoryType.Badge]: [
    "취업을 뽀개버린",
    "2024년 대학 새내기",
    "꿈꾸던 회사에 입사한",
    "그 어려운 시험에 합격한",
  ],
  [CategoryType.Leaf]: [
    "건강한 가족과 함께하는",
    "올해의 핫바디",
    "언제나 활기찬",
    "내가 바로 헬창",
    "바디프로필, 성공적",
    "인간 비타500",
  ],
  [CategoryType.Flower]: [
    "애인과 알콩달콩한",
    "가족과 행복한 시간을 보낸",
    "즐거운 여행을 떠난",
    "자유로운 영혼",
    "혼자서도 잘 노는",
    "언제나 활짝 웃는",
  ],
};
