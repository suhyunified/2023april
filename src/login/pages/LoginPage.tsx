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
import ImageRabbit from "@/main/images/img_main_rabbit.png";
import Layout from "@/shared/components/Layout";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { ImageOnboardCover } from "@/onboard/images";
import Flex from "@/shared/components/Flex";
import { ImageRabbitHappy } from "@/shared/images";

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
      navigate("/onboard");
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
    <Layout noPadding>
      <ImageWrapper>
        <CoverImage src={ImageOnboardCover} />
      </ImageWrapper>
      <Container>
        <RabbitContainer>
          <RabbitImage
            alt="구름을 타고 날고있는 야끼토 신령"
            src={ImageRabbit}
          />
        </RabbitContainer>
        <Flex direction="column" alignItems="center">
          <Text chosun size={2.5} lineHeight={3.5}>
            야끼토
          </Text>
          <Spacing size={1} />
          <Text chosun size={1}>
            많은 사람을 우수하게 만드는 신의 이야기
          </Text>
          <Spacing size={3} />
        </Flex>
        <div
          css={css`
            padding: 1rem;
          `}
        >
          <Button variant="white" fullWidth onClick={handleLogin}>
            시작하기
          </Button>
        </div>
      </Container>
      <Dialog open={isModalOpen} onClose={handleErrorModalClose}>
        로그인 시도 중 오류가 발생했습니다. <br /> 잠시 후에 다시 시도해주세요.
      </Dialog>
    </Layout>
  );
};

export default LoginPage;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  color: ${colors.gray300};
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const CoverImage = styled.img`
  width: 100%;
  height: 100%;
`;

const RabbitContainer = styled.div`
  position: absolute;
  top: 20%;
  width: 50%;
  min-width: 200px;
  right: 0;
  z-index: 1;
  animation: 3000ms float infinite;

  @keyframes float {
    0% {
      transform: translateY(10px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(10px);
    }
  }
`;
const RabbitImage = styled.img`
  width: 100%;
  height: 100%;
`;
