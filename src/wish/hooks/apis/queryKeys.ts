export const queryKeys = {
  base: ["login"],
  kakaoLogin: () => [...queryKeys.base, "kakao"] as const,
  getProfile: () => [...queryKeys.base, "get", "profile"] as const,
  getWish: (wishId: number) =>
    [...queryKeys.base, "get", "wish", wishId] as const,
  getWishList: (page: number, sort: string) =>
    [...queryKeys.base, "get", "wishList", page, sort] as const,
};
