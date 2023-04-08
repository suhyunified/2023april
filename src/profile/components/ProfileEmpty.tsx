import Button from "@/shared/components/Button";
import Flex from "@/shared/components/Flex";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const MypageEmpty = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div
        css={css`
          flex: 1;
        `}
      />
      <Flex
        direction="column"
        justifyContents="center"
        css={css`
          min-height: 10rem;
        `}
      >
        <Text color={colors.gray500} weight={700} size={1} align="center">
          아직 소원을 등록하지 않았어요.
        </Text>
        <Spacing size={0.625} />
        <Text color={colors.gray500} size={0.875} lineHeight={1} align="center">
          소원은 딱 일주일 동안만 쓸 수 있어요. <br />
          지금 작성하러 가볼까요?
        </Text>
      </Flex>
      <div
        css={css`
          flex: 1;
        `}
      />
      <Button onClick={() => navigate("/wish/new")}>나의 소원 작성하기</Button>
    </Container>
  );
};

export default MypageEmpty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 100%;
`;
