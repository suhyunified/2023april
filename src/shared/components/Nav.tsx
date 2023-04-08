import styled from "@emotion/styled";
import { colors } from "../constants";
import BackButton from "./BackButton";

interface Props {
  onBack?: () => void;
}
const Nav = ({ onBack }: Props) => {
  return (
    <NavContainer>
      <BackButton onClick={onBack} />
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3rem;
  padding-top: 1rem;
  background-color: ${colors.gray16};
`;
