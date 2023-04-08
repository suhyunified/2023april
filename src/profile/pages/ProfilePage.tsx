import ProfileEmpty from "@/profile/components/ProfileEmpty";
import Button from "@/shared/components/Button";
import FlexGrow from "@/shared/components/FlexGrow";
import Layout from "@/shared/components/Layout";
import Nav from "@/shared/components/Nav";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import WishInfo from "@/shared/components/WisnInfo";
import { colors } from "@/shared/constants";
import { useGetProfile } from "@/shared/hooks/apis/user/useGetProfile";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data, error } = useGetProfile();
  if (error) navigate("/login");

  const user = data?.data.data;
  return (
    <Layout>
      <Nav />
      <Spacing size={1.875} />
      <Header>
        <Text size={1.375} lineHeight={1.875} weight={700} color={colors.white}>
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
        <EditButton>
          <Text color={colors.gray900} weight={600} size={0.75} lineHeight={1}>
            소원 1회 수정권
          </Text>
        </EditButton>
      </Header>

      <ProfileEmpty />

      {/* <WishInfo  wish={{

      }}/> */}
    </Layout>
  );
};

export default ProfilePage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditButton = styled.button`
  cursor: pointer;

  border: none;
  border-radius: 1rem;
  height: fit-content;
  padding: 0.5rem 0.625rem;
  background-color: ${colors.white};
`;
