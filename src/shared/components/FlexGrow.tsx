import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  minHeight?: number;
}

const FlexGrow = styled.div<Props>`
  flex: 1;
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}rem;
    `}
`;

export default FlexGrow;
