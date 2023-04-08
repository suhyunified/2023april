import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, Ref, RefObject } from "react";
import { colors } from "../constants";

const ButtonVariant = {
  Primary: "primary",
  White: "white",
  Black: "black",
} as const;

type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant];

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  variant = "primary",
  onClick,
  ...rest
}: Props) => {
  return (
    <ButtonWrapper
      onClick={() => {
        if (disabled) return;
        onClick?.();
      }}
      $fullWidth={fullWidth}
      $variant={variant}
      $disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{
  $disabled: boolean;
  $fullWidth: boolean;
  $variant: ButtonVariant;
}>`
  cursor: pointer;

  border: none;
  border-radius: 1.25rem;

  padding: 0.85rem;
  font-size: 1rem;
  font-weight: 600;
  min-height: 3.375rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $variant }) =>
    $variant === ButtonVariant.White
      ? css`
          color: #030303;
          background-color: white;
        `
      : $variant === ButtonVariant.Black
      ? css`
          color: ${colors.gray100};
          background-color: ${colors.gray900};
        `
      : css`
          color: ${colors.gray100};
          background-color: ${colors.primary};
        `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: default;
      background-color: ${colors.gray400};
    `}
`;
