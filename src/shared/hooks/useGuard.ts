import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_COOKIE_KEY } from "../constants";
import { getCookie } from "../utils/cookie";
import { useGetProfile } from "./apis/user/useGetProfile";

interface Props {
  withAuth?: boolean;
  withNickname?: boolean;
}

const useGuard = ({ withAuth = false, withNickname }: Props) => {
  const navigate = useNavigate();
  const isLogin = getCookie(LOGIN_COOKIE_KEY);
  const getProfile = useGetProfile();
  const nickname = getProfile.data?.data.data.nickname;

  useEffect(() => {
    if (getProfile.isLoading) return;
    if ((withAuth && !isLogin) || getProfile.error?.response?.status === 500) {
      return navigate("/login");
    }
    if (withNickname === true) {
      if (!nickname) return navigate("/onboard");
    } else if (withNickname === false) {
      if (nickname) return navigate("/");
    }
  }, [isLogin, nickname, getProfile.isLoading]);
};

export default useGuard;
