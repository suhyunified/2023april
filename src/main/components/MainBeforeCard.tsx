import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import styled from "@emotion/styled";
import ImageMainBg from "@/main/images/img_main_bg.png";
import ImageRabbit from "@/main/images/img_main_rabbit.png";
import Button from "@/shared/components/Button";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";

import React from "react";
import { useNavigate } from "react-router-dom";

const MainBeforeCard = () => {
  const navigate = useNavigate();
  const { error } = useGetProfile();

  const handlePostingButtonClick = () => {
    if (error) return navigate("/login");

    navigate("/wish/new");
  };

  return (
    <>
      <CardContents>
        <Text
          size={1.375}
          weight={500}
          color={colors.gray100}
          lineHeight={1.875}
        >
          벌써 소원 나무에
          <br />
          5,780개의 소원이 걸렸어요!
        </Text>
        <Spacing size={1.25} />
        <Text weight={500} color={colors.gray300}>
          나의 소원도 작성해 볼까요?
        </Text>
        <Spacing size={0.75} />
        <Button onClick={handlePostingButtonClick}>작성하기</Button>
      </CardContents>
      <BackgroundImage alt="신비로운 산 속 이미지" src={ImageMainBg} />
      <RabbitContainer>
        <RabbitImage alt="구름을 타고 날고있는 야끼토 신령" src={ImageRabbit} />
      </RabbitContainer>
    </>
  );
};

export default MainBeforeCard;

const CardContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 100%;
  padding: 1.25rem;
  background-image: linear-gradient(0deg, black 15%, rgba(0, 0, 0, 0));
  z-index: 1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  min-width: 600px;
  z-index: 0;
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
