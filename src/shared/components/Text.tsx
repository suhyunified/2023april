import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes, RefObject } from "react";
import { colors } from "../constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
  weight?: number;
  align?: "center" | "start" | "end";
  inline?: boolean;
  lineHeight?: number;
}
const Text = ({
  size = 1,
  color = "inherit",
  weight = 400,
  children,
  align = "start",
  lineHeight,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      css={css`
        line-height: ${lineHeight || size}rem;
        text-align: ${align};
        color: ${color};
        font-size: ${size}rem;
        font-weight: ${weight};
        white-space: inherit;
        word-break: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    >
      {children}
    </div>
  );
};

export default Text;
