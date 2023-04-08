import styled from "@emotion/styled";
import { colors } from "../constants";
import Text from "./Text";
import { css, Dialog as _Dialog } from "@mui/material";
import Flex from "./Flex";
import Button from "./Button";
import Spacing from "./Spacing";

interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
const Dialog = ({ open, onClose, children }: Props) => {
  return (
    <_Dialog
      open={open}
      onClose={onClose}
      css={css`
        border-radius: 2rem;
      `}
    >
      <Container>
        <Text color={colors.gray700} size={1} lineHeight={1.25}>
          {children}
        </Text>
        <Spacing size={3} />
        <Button
          fullWidth
          onClick={() => {
            onClose?.();
          }}
        >
          확인
        </Button>
      </Container>
    </_Dialog>
  );
};

export default Dialog;

const Container = styled.div`
  min-width: 280px;
  max-width: 320px;
  padding: 1.25rem;
`;

const ButtonWrapper = styled(Flex)``;
