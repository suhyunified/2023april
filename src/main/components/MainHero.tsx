import Button from "@/shared/components/Button";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors, CONTAINER_PADDING_REM, MAX_WIDTH } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { useEffect, useRef, useState } from "react";
import MainBeforeCard from "./MainBeforeCard";
import MainAfterCard from "./MainAfterCard";
import { useNavigate } from "react-router-dom";
import { useGetMyWish } from "@/wish/hooks/apis/useGetMyWish";

const HERO_HEIGHT_PX = 472;

interface Props {
  counts: number;
}
const MainHero = ({ counts }: Props) => {
  const navigate = useNavigate();
  const getMyWish = useGetMyWish();
  const FloatingBox = useRef<HTMLDivElement>(null);
  const [isFloatingNav, setIsFloatingNav] = useState(false);

  const myWish = getMyWish.data?.data.data;

  const onScroll = () => {
    const scrollTop = document.scrollingElement?.scrollTop || 0;
    setIsFloatingNav(scrollTop > HERO_HEIGHT_PX);
  };

  useEffect(() => {
    if (!FloatingBox) return;

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const handlePostingButtonClick = () => {
    navigate("/wish/new");
  };

  return (
    <>
      <Container>
        <Card
          css={css`
            height: ${HERO_HEIGHT_PX}px;
          `}
        >
          {!getMyWish.isLoading &&
            (myWish ? (
              <MainAfterCard counts={counts} />
            ) : (
              <>
                <NavWrapper isFloating={isFloatingNav}>
                  <Nav isFloating={isFloatingNav}>
                    <Spacing size={1.25} />
                    <Text weight={700} align="center">
                      나의 소원도 작성해 볼까요?
                    </Text>
                    <Spacing size={1.125} />
                    <Button variant="white" onClick={handlePostingButtonClick}>
                      작성하기
                    </Button>
                    <Spacing size={1.25} />
                  </Nav>
                </NavWrapper>
                <MainBeforeCard counts={counts} />
              </>
            ))}
        </Card>
      </Container>
    </>
  );
};

export default MainHero;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  color: ${colors.gray300};
`;

const Card = styled.div`
  position: relative;
  height: 27rem;

  border-radius: 1.25rem;
  background-color: ${colors.black};
  overflow: hidden;
`;

interface NavWrapperProps {
  isFloating: boolean;
}
const NavWrapper = styled.div<NavWrapperProps>`
  position: fixed;
  display: flex;
  justify-content: center;

  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  top: 20px;
  padding: 0 20px;
  transition-duration: 200ms;

  ${({ isFloating }) =>
    isFloating
      ? css`
          visibility: visible;

          opacity: 1;
          transform: translateY(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: translateY(-20px);
        `}
`;

interface NavProps {
  isFloating: boolean;
}
const Nav = styled.div<NavProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 0 1.25rem;
  border-radius: 1.25rem;
  width: min(100%, ${MAX_WIDTH - CONTAINER_PADDING_REM * 2 * 16}px);

  color: white;
  background-color: ${colors.primary};
`;
