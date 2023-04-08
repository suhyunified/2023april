import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { IconLeftChevron } from "../images";

interface Props {
  onClick?: () => void;
}
const BackButton = ({ onClick }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        cursor: pointer;
      `}
      onClick={() => {
        onClick ? onClick() : navigate(-1);
      }}
    >
      <IconLeftChevron />
    </div>
  );
};

export default BackButton;
