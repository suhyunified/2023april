import Button from "@/shared/components/Button";
import Flex from "@/shared/components/Flex";
import Layout from "@/shared/components/Layout";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { LOGIN_COOKIE_KEY } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import { getCookie } from "@/shared/utils/cookie";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageOnboardCover } from "../images";

const STORIES = [
  "옛날 옛날 아주 먼 옛날에",
  "만우절에만 소원을 들어주는\n신이 있었어요",
  "그 신은 1년에 딱 한번 나타나서\n소원을 들어주고,\n1년 뒤에 나타나 사람들이 그 소원이 이루어 졌는지 확인하고는\n그냥 떠났답니다.",
  "지금 여러분이 원하는 소원\n딱 한가지를 이야기하러 가볼까요?",
];

const OnboardPage = () => {
  const isLogin = getCookie(LOGIN_COOKIE_KEY);
  const navigate = useNavigate();
  const getProfile = useGetProfile();
  const [step, setStep] = useState(0);
  const [] = useState();

  useEffect(() => {
    if (!isLogin) navigate("/login");
    if (getProfile.data?.data.data.nickname) navigate("/");
  }, [isLogin]);

  const handleNextClick = () => {
    if (STORIES.length > step + 1) setStep((prev) => prev + 1);
    else navigate("/onboard/nickname");
  };

  return (
    <Layout noPadding>
      <ImageWrapper>
        <CoverImage src={ImageOnboardCover} />
      </ImageWrapper>
      <Flex
        alignItems="center"
        justifyContents="center"
        css={css`
          height: 100%;
          position: relative;
        `}
      >
        {STORIES.map(
          (story, index) =>
            index === step && (
              <AnimationText>
                <Text align="center" size={1.25} lineHeight={1.75}>
                  {STORIES[index]}
                </Text>
              </AnimationText>
            )
        )}
      </Flex>
      <div
        css={css`
          width: 100%;
          padding: 1.875rem;
          position: relative;
        `}
      >
        <Button variant="white" fullWidth onClick={handleNextClick}>
          다음
        </Button>
      </div>
    </Layout>
  );
};

export default OnboardPage;

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

const AnimationText = styled.div`
  text-align: center;
  transition-duration: 300ms;
  white-space: pre;
  animation: 500ms fadeUp forwards;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
