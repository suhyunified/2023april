import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const HeaderTemplate = ({ children, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Header />
      <Body>{children}</Body>
    </Container>
  );
};

export default HeaderTemplate;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: red;

  position: sticky;
  width: 100%;
  height: 52px;
  top: 0;
`;

const Body = styled.div`
  background-color: pink;
  min-height: calc(100% - 52px);
`;
