import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_COOKIE_KEY } from "../constants";
import { getCookie } from "../utils/cookie";
import { useGetProfile } from "./apis/user/useGetProfile";

interface Props {
  withAuth?: boolean;
  withNickname?: boolean;
}

const useGuard = ({ withAuth = false, withNickname = false }: Props) => {
  const navigate = useNavigate();
  const isLogin = getCookie(LOGIN_COOKIE_KEY);
  const getProfile = useGetProfile();
  const nickname = getProfile.data?.data.data.nickname;

  useEffect(() => {
    if (withAuth && !isLogin) navigate("/login");
    if (withNickname) {
      if (!nickname) navigate("/onboard");
    } else {
      if (nickname) navigate("/");
    }
  }, [isLogin, nickname]);
};

export default useGuard;
