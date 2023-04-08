import Spacing from "@/shared/components/Spacing";

import { WishInfoType } from "@/wish/types";
import styled from "@emotion/styled";
import MainWishItem from "./MainWishItem";

interface Props {
  items?: WishInfoType[];
}
const MainWishList = ({ items }: Props) => {
  return (
    <Container>
      {items?.map((item, index) => (
        <div key={`wish-item-${index}`}>
          <MainWishItem wish={item} />
          <Spacing size={0.825} />
        </div>
      ))}
    </Container>
  );
};

export default MainWishList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
