import ProfileEmpty from "@/profile/components/ProfileEmpty";
import Button from "@/shared/components/Button";
import Flex from "@/shared/components/Flex";
import FlexGrow from "@/shared/components/FlexGrow";
import Layout from "@/shared/components/Layout";
import Nav from "@/shared/components/Nav";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";

import { colors } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import useGuard from "@/shared/hooks/useGuard";
import WishInfo from "@/wish/components/WishInfo";
import { useGetMyWish } from "@/wish/hooks/apis/useGetMyWish";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  useGuard({
    withAuth: true,
    withNickname: true,
  });

  const navigate = useNavigate();
  const { data: profile } = useGetProfile();
  const { data: myWish, isLoading } = useGetMyWish();

  const user = profile?.data.data;
  const wish = myWish?.data.data;
  if (isLoading) return <div />;

  return (
    <Layout>
      <Nav />
      <Spacing size={1.875} />
      <Header>
        <Text size={1.375} lineHeight={1.875} weight={700}>
          <span
            css={css`
              text-decoration: underline;
            `}
          >
            {user?.nickname}님
          </span>
          의
          <br />
          아늑한 소원공간
        </Text>
        {wish && (
          <EditButton
            $disabled={!wish.isUpdateAvailable}
            onClick={() => navigate("/wish/edit")}
          >
            <Text
              color={colors.gray900}
              weight={600}
              size={0.75}
              lineHeight={1}
            >
              소원 1회 수정권
            </Text>
          </EditButton>
        )}
      </Header>
      <Spacing size={2} />
      {!wish ? (
        <ProfileEmpty />
      ) : (
        <Flex
          alignItems="center"
          css={css`
            flex: 1;
          `}
        >
          <WishInfo wish={myWish.data.data} />
        </Flex>
      )}
    </Layout>
  );
};

export default ProfilePage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button<{ $disabled: boolean }>`
  cursor: pointer;

  border: none;
  border-radius: 1rem;
  height: fit-content;
  padding: 0.5rem 0.625rem;
  background-color: ${colors.white};

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: default;
      color: ${colors.gray900};
      background-color: ${colors.gray700};
    `}
`;
