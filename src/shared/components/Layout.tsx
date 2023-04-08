import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, CONTAINER_PADDING_REM, MAX_WIDTH } from "../constants";
import Spacing from "./Spacing";

interface Props {
  children: React.ReactNode;
  noPadding?: boolean;
}

const Layout = ({ children, noPadding = false }: Props) => {
  return (
    <Wrapper>
      <Container $noPadding={noPadding}>
        {children}
        {!noPadding && <Spacing size={1.875} />}
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div<{ $noPadding: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${MAX_WIDTH}px;
  min-width: 320px;
  padding: 0 ${({ $noPadding }) => ($noPadding ? 0 : CONTAINER_PADDING_REM)}rem;
  color: ${colors.white};
`;
