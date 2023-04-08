export const queryKeys = {
  base: ["login"],
  kakaoLogin: () => [...queryKeys.base, "kakao"],
  getProfile: () => [...queryKeys.base, "get", "profile"],
};
