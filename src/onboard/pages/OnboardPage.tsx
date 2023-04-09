import Button from "@/shared/components/Button";
import Flex from "@/shared/components/Flex";
import Layout from "@/shared/components/Layout";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { LOGIN_COOKIE_KEY } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import useGuard from "@/shared/hooks/useGuard";
import { getCookie } from "@/shared/utils/cookie";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageOnboardCover } from "../images";

const STORIES = [
  "소원을 들어주는 신\n야끼토가 깨어났어요!",
  "야끼토는 간절한 소원들을 귀담아 듣고\n정말 간절한 소원 딱 한가지를 \n현실로 만들어 준다고 해요.",
  "5월이 되면 야끼토는 다시 잠에 들어요.\n 벌써 4월이 얼마 남지 않았군요!",
  "지금 여러분의 간절한 소원\n딱 한가지를 이야기하러 가볼까요?",
];

const OnboardPage = () => {
  useGuard({
    withAuth: true,
    withNickname: false,
  });

  const navigate = useNavigate();
  const [step, setStep] = useState(0);

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
                <Text chosun align="center" size={1.25} lineHeight={1.75}>
                  {story}
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
