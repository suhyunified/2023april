import Spacing from "@/shared/components/Spacing";
import Switch from "@/shared/components/Switch";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import { WishNewStep } from "@/wish/constants";
import { useGetWishList } from "@/wish/hooks/apis/useGetWishList";
import { WishInfoType, WishSort } from "@/wish/types";
import { GetWishList } from "@/wish/types/apis";
import styled from "@emotion/styled";
import { useState } from "react";
import { ListOrderBy } from "../constants";
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
