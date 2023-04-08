import { WishFormContext } from "@/wish/context/wishForm";
import Category from "@/shared/components/Category";
import Flex from "@/shared/components/Flex";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import styled from "@emotion/styled";
import { IconRefresh } from "@/shared/images";
import { useContext, useState } from "react";
import FlexGrow from "@/shared/components/FlexGrow";
import Button from "@/shared/components/Button";
import { css } from "@emotion/react";
import { colors } from "@/shared/constants";

interface Props {
  onSubmit: () => void;
}
const WishNewStyle = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("로또 1등 당첨");
  const context = useContext(WishFormContext);

  return (
    <>
      <Flex
        css={css`
          flex: 1;
          min-height: 300px;
        `}
        fullWidth
        direction="column"
        alignItems="center"
        justifyContents="center"
      >
        <Category type={context.category} />
        <Spacing size={2.5} />
        <Flex alignItems="center">
          <Text size={1.375} weight={600} color={colors.white}>
            {title}
          </Text>
          <Spacing size={0.5} inline />
          <RefreshButton />
        </Flex>
        <Spacing size={4} />
      </Flex>
      <Button
        onClick={() => {
          context.setForm?.((prev) => ({
            ...prev,
            title,
          }));
          onSubmit();
        }}
      >
        다음
      </Button>
    </>
  );
};

export default WishNewStyle;

const RefreshButton = styled(IconRefresh)`
  cursor: pointer;
`;
