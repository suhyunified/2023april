import { WishSort } from "@/wish/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HTMLAttributes, useState } from "react";
import { colors } from "../constants";

type SwitchOptionType = {
  key: WishSort;
  label: string;
};

interface Props {
  onChange: (v: WishSort) => void;
  options: SwitchOptionType[];
}

const SwitchState = {
  Left: false,
  Right: true,
} as const;

const Switch = ({ options, onChange }: Props) => {
  const [state, setState] = useState<boolean>(SwitchState.Left);

  const handleOptionClick = (value: boolean) => {
    setState(value);
    const index = Number(state);
    onChange(options[index].key);
  };

  return (
    <SwitchContainer>
      <SwitchOption
        label={options?.[Number(SwitchState.Left)].label}
        active={state === SwitchState.Left}
        onClick={() => handleOptionClick(SwitchState.Left)}
      />
      <SwitchOption
        label={options?.[Number(SwitchState.Right)].label}
        active={state === SwitchState.Right}
        onClick={() => handleOptionClick(SwitchState.Right)}
      />
      <SwitchButton state={state} />
    </SwitchContainer>
  );
};

export default Switch;

const SwitchContainer = styled.div`
  display: flex;
  position: relative;

  height: 3.375rem;
  border-radius: 6.25rem;
  padding: 0.5rem 0.625rem;
  background-color: ${colors.grayeb};
`;

interface SwitchOptionProps {
  label: string;
  active?: boolean;
}
const SwitchOption = styled.div<SwitchOptionProps>`
  cursor: pointer;
  position: relative;

  flex: 1;
  height: 100%;

  &::after {
    content: "${({ label }) => label}";
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    z-index: 1;

    width: 100%;
    height: 100%;
    font-size: 0.875rem;
    font-weight: 600;

    transition-duration: 300ms;
    color: ${({ active }) => (active ? colors.gray900 : colors.gray99)};
  }
`;

interface SwitchButtoProps {
  state: boolean;
}
const SwitchButton = styled.div<SwitchButtoProps>`
  position: absolute;
  top: 0.5rem;
  width: 50%;
  height: 2.375rem;

  border-radius: 6.25rem;
  background-color: ${colors.white};

  transition-duration: 300ms;

  ${({ state }) =>
    state === SwitchState.Left
      ? css`
          left: 0.625rem;
        `
      : css`
          transform: translateX(calc(100% - 1.25rem));
        `}
`;
