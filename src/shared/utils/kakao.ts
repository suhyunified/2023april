export const requestkakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_APP_KEY;
  const REDIRECT_URI = `${import.meta.env.VITE_DOMAIN}/login`;

  const kakao = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  location.href = kakao;
};
