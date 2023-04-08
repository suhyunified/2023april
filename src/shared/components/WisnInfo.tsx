import { WishInfoType } from "@/wish/types";
import styled from "@emotion/styled";
import { colors } from "../constants";
import {
  ImageRabbitHappy,
  ImageRabbitHealth,
  ImageRabbitMoney,
  ImageRabbitSuccess,
} from "../images";
import Button from "./Button";
import { CategoryType } from "./Category";
import Flex from "./Flex";
import LikeButton from "./LikeButton";
import Spacing from "./Spacing";
import Text from "./Text";

const WishCoverMapper: Record<CategoryType, string> = {
  [CategoryType.Coin]: ImageRabbitMoney,
  [CategoryType.Badge]: ImageRabbitSuccess,
  [CategoryType.Flower]: ImageRabbitHappy,
  [CategoryType.Leaf]: ImageRabbitHealth,
};

interface Props {
  wish: WishInfoType;
}
const WishInfo = ({ wish }: Props) => {
  return (
    <Container>
      <img alt="토끼" src={WishCoverMapper[wish.category]} />
      <Spacing size={3} />
      <Text
        size={1.125}
        weight={600}
        color={colors.gray100}
        align="center"
        lineHeight={1.875}
      >
        {wish.title}
        <br />
        {wish.ownerNickname}
      </Text>
      <Spacing size={1.25} />
      <Contents>
        <Text
          size={0.875}
          align="center"
          color={colors.gray900}
          lineHeight={1.25}
        >
          {wish.content}
        </Text>
      </Contents>
      <Spacing size={1.25} />
      {wish.didReacted ? (
        <Text size={0.875} color={colors.gray600}>
          {wish.reactionCount.toLocaleString()}명과 함께 나도 응원하고있어요
        </Text>
      ) : (
        <>
          <LikeButton />
          <Spacing size={1} />
          <Text size={0.875} color={colors.gray600}>
            {wish.reactionCount.toLocaleString()}명의 응원이 쌓였어요!
          </Text>
        </>
      )}
    </Container>
  );
};

export default WishInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  animation: 1s fadein forwards;

  @keyframes fadein {
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

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 1rem;
  min-height: 5rem;
  border-radius: 1.25rem;
  background-color: ${colors.white};
  word-break: break-all;
`;
