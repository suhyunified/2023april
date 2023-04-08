import { useLogin, useSetNickname } from "@/login/hooks/apis";
import Button from "@/shared/components/Button";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import {
  colors,
  CONTAINER_PADDING_REM,
  LOGIN_COOKIE_KEY,
} from "@/shared/constants";
import { requestkakaoLogin } from "@/shared/utils/kakao";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Dialog from "@/shared/components/Dialog";
import { useEffect, useState } from "react";
import { useGetProfile } from "@/login/hooks/apis/useGetProfile";
import { setCookie } from "@/shared/utils/cookie";

import Layout from "@/shared/components/Layout";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync: login } = useLogin();

  const query = queryString.parse(location.search);
  const code = query?.code;

  const handleLogin = async () => {
    requestkakaoLogin();
  };

  const requestLogin = async () => {
    try {
      const { data } = await login({ code });
      const { accessToken } = data.data;
      setCookie(LOGIN_COOKIE_KEY, accessToken);
      navigate("/");
    } catch (e) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if (!code) return;

    requestLogin();
  }, [code]);

  const handleErrorModalClose = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <Layout>
      <Container>
        <div css={css``}></div>
        <Button variant="white" fullWidth onClick={handleLogin}>
          왕꿈트리 시작하기
        </Button>
        <Spacing size={2.5} />
      </Container>
      <Dialog open={isModalOpen} onClose={handleErrorModalClose}>
        로그인 시도 중 오류가 발생했습니다. <br /> 잠시 후에 다시 시도해주세요.
      </Dialog>
    </Layout>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  color: ${colors.gray300};
`;
