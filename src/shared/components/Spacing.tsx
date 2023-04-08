import { css } from "@emotion/react";

interface Props {
  size: number;
  inline?: boolean;
}

const Spacing = ({ size, inline }: Props) => {
  return (
    <div
      css={
        inline
          ? css`
              width: ${size}rem;
            `
          : css`
              height: ${size}rem;
            `
      }
    ></div>
  );
};

export default Spacing;
