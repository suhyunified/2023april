import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../constants";

interface Props {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  align?: "start" | "center" | "end";
  size?: number;
  color?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}
const Input = ({
  value,
  onChange,
  align = "start",
  size = 1.125,
  color = colors.gray100,
  placeholder = "",
  minLength,
  maxLength,
}: Props) => {
  return (
    <InputWrapper>
      <StyledInput
        css={css`
          color: ${color};
          text-align: ${align};
          font-size: ${size}rem;
        `}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  padding: 0.875rem;
  border-bottom: 2px solid white;

  &:focus-within {
    border-bottom: 2px solid ${colors.primary};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${colors.gray700};
  }
  &::-webkit-input-placeholder {
    color: ${colors.gray700};
  }
  &:-ms-input-placeholder {
    color: ${colors.gray700};
  }
`;
