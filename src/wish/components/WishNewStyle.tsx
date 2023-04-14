import { WishFormContext } from "@/wish/context/wishForm";
import Category from "@/shared/components/Category";
import Flex from "@/shared/components/Flex";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import styled from "@emotion/styled";
import { IconRefresh } from "@/shared/images";
import { useContext, useEffect, useState } from "react";
import FlexGrow from "@/shared/components/FlexGrow";
import Button from "@/shared/components/Button";
import { css } from "@emotion/react";
import { colors } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import { STYLE_LIST } from "../constants";
import { getRandomNumber } from "../libs";

interface Props {
  onSubmit: () => void;
}
const WishNewStyle = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const context = useContext(WishFormContext);
  const getProfile = useGetProfile();

  const maxLength = STYLE_LIST[context.category].length;

  const handleTitleChange = () => {
    const index = getRandomNumber(maxLength) - 1;
    setTitle(STYLE_LIST[context.category][index]);
  };

  useEffect(() => {
    handleTitleChange();
  }, []);

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
            {title} {getProfile.data?.data.data.nickname}
          </Text>
          <Spacing size={0.5} inline />
          <RefreshButton onClick={handleTitleChange} />
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
