export const queryKeys = {
  base: ["wish"],
  kakaoLogin: () => [...queryKeys.base, "kakao"] as const,
  getProfile: () => [...queryKeys.base, "get", "profile"] as const,
  getWish: (wishId: number) => [...queryKeys.base, "get", , wishId] as const,
  getWishList: (page: number, sort: string) =>
    [...queryKeys.base, "get", "list", page, sort] as const,
  getMyWish: () => [...queryKeys.base, "get", "my"] as const,
};
