import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fullWidth?: boolean;
  direction?: "row" | "column";
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContents?: "flex-start" | "center" | "flex-end";
}
const Flex = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default Flex;

const Container = styled.div<Props>`
  display: flex;
  ${({ direction, alignItems, justifyContents }) => css`
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContents};
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
