import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { IconProfile } from "../images";

const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <ProfileWrapper onClick={() => navigate("/profile")}>
      <IconProfile />
    </ProfileWrapper>
  );
};

export default ProfileButton;

const ProfileWrapper = styled.div`
  position: absolute;

  cursor: pointer;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
`;
