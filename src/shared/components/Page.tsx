import styled from "@emotion/styled";
import { colors, CONTAINER_PADDING_REM } from "../constants";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 2.5rem;
  color: ${colors.gray300};
  padding: 0 ${CONTAINER_PADDING_REM}rem;
`;

export default Page;
