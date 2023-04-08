export const WishNewStep = {
  Style: "style",
  Category: "category",
  Contents: "contents",
} as const;
export type WishNewStep = typeof WishNewStep[keyof typeof WishNewStep];
