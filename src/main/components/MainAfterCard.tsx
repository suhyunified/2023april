import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import styled from "@emotion/styled";
import ImageRabbit from "@/main/images/img_main_after_rabbit.png";
import Button from "@/shared/components/Button";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";

import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileButton from "@/shared/components/ProfileButton";

interface Props {
  counts: number;
}
const MainAfterCard = ({ counts }: Props) => {
  const navigate = useNavigate();
  const { error } = useGetProfile();

  const handlePostingButtonClick = () => {
    if (error) return navigate("/login");

    navigate("/wish/new");
  };

  return (
    <>
      <CardContents>
        <ProfileButton />

        <Text
          size={1.375}
          weight={500}
          color={colors.gray100}
          lineHeight={1.875}
          align="center"
        >
          지금 {counts.toLocaleString()}명의 사람들의
          <br />
          소원이 이루어지는 중이에요!
        </Text>
      </CardContents>

      <RabbitContainer>
        <RabbitImage alt="명상하고 있는 야끼토 신령" src={ImageRabbit} />
      </RabbitContainer>
    </>
  );
};

export default MainAfterCard;

const CardContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 100%;
  z-index: 1;
  padding: 1.25rem;
`;

const RabbitContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

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
  width: max(70%, 290px);
  max-height: 100%;
`;
