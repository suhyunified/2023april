import styled from "@emotion/styled";
import { colors } from "../constants";
import Spacing from "./Spacing";
import Text from "./Text";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}
const Textarea = ({ value, onChange, placeholder }: Props) => {
  return (
    <TextareaWrapper>
      <StyledTextarea
        value={value}
        onChange={onChange}
        maxLength={100}
        placeholder={placeholder}
      />
      <Spacing size={0.625} />
      <Text size={0.875} weight={500} align="end" color={colors.gray700}>
        {value.length} / 100
      </Text>
    </TextareaWrapper>
  );
};

export default Textarea;

const TextareaWrapper = styled.div`
  border-radius: 1.25rem;
  background-color: ${colors.gray900};
  height: 13rem;
  padding: 1rem 1rem 2.875rem 1rem;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;

  size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: ${colors.gray100};
  border: none;

  resize: none;
  outline: none;
  word-break: keep-all;
  background-color: transparent;
`;
