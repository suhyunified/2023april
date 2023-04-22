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
  chosun?: boolean;
  ellipsis?: boolean;
}
const Text = ({
  size = 1,
  color = "inherit",
  weight = 400,
  children,
  chosun = false,
  align = "start",
  lineHeight,
  ellipsis,
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

        ${ellipsis &&
        css`
          overflow: hidden;
          text-overflow: ellipsis;
        `}

        ${chosun &&
        css`
          font-family: "chosun";
        `}
      `}
    >
      {children}
    </div>
  );
};

export default Text;
