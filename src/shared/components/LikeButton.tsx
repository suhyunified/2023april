import styled from "@emotion/styled";

import { IconSmile } from "@/shared/images";
import Button from "./Button";
import Flex from "./Flex";
import Spacing from "./Spacing";
import { usePostReaction } from "@/wish/hooks/apis/usePostReaction";

interface Props {
  wishId: number;
}
const LikeButton = ({ wishId }: Props) => {
  const { mutate } = usePostReaction();

  return (
    <Button
      variant="primary"
      style={{
        borderRadius: "100px",
      }}
      onClick={() => mutate(wishId)}
    >
      <Flex alignItems="center">
        <IconSmile />
        <Spacing size={0.375} inline />
        응원해요
      </Flex>
    </Button>
  );
};

export default LikeButton;
