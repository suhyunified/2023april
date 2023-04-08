import Category from "@/shared/components/Category";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import { WishInfoType } from "@/wish/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

interface Props {
  wish: WishInfoType;
}
const MainWishItem = ({ wish }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/wish/${wish.id}`)}>
      <Body>
        <Category
          size={3.25}
          type={wish.category}
          clickable={false}
          backgroundColor={colors.gray16}
        />
        <Spacing size={0.625} inline />
        <WishDescription>
          <Text size={0.875} color={colors.gray100}>
            {wish?.title}
          </Text>
          <Spacing size={0.3} />
          <Text css={css``} size={1} weight={600} color={colors.gray100}>
            {wish.content}
          </Text>
        </WishDescription>
      </Body>
      <Footer>
        <Text size={0.75} color={colors.primary} weight={700}>
          지금 {wish.reactionCount.toLocaleString()}명이 응원하는 중이에요
        </Text>
      </Footer>
    </Container>
  );
};

export default MainWishItem;

const Container = styled.div`
  cursor: pointer;

  overflow: hidden;
  border-radius: 1.25rem;
  background-color: ${colors.gray900};
`;

const Body = styled.div`
  display: flex;
  align-items: center;

  height: 4.8rem;
  padding: 0.8rem 1rem;
`;

const WishDescription = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  background-color: ${colors.gray800};
`;
