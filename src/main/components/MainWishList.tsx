import Spacing from "@/shared/components/Spacing";
import Switch from "@/shared/components/Switch";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import { useGetWishList } from "@/wish/hooks/apis/useGetWishList";
import { WishSort } from "@/wish/types";
import styled from "@emotion/styled";
import { useState } from "react";
import MainWishItem from "./MainWishItem";

const ListOrderBy = {
  Recent: "REACTION_COUNT_DESC",
  Reaction: "CREATED_AT_DESC",
} as const;

const ListOrderByDescription = {
  [ListOrderBy.Recent]: "최근 등록 순",
  [ListOrderBy.Reaction]: "높은 반응 순",
};

const ListOrderBySwitchOptions = [
  {
    key: ListOrderBy.Recent,
    label: ListOrderByDescription[ListOrderBy.Recent],
  },

  {
    key: ListOrderBy.Reaction,
    label: ListOrderByDescription[ListOrderBy.Reaction],
  },
];

const MainWishList = () => {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState<WishSort>(ListOrderBy.Reaction);

  const { data } = useGetWishList({ page, sort });
  const wishList = data?.data.data;

  return (
    <Container>
      <Spacing size={1.875} />
      <Text size={1.125} weight={700} color={colors.gray100} lineHeight={1.5}>
        다른 친구들은
        <br />
        이런 소원을 작성했어요.
      </Text>
      <Spacing size={0.625} />

      <Switch options={ListOrderBySwitchOptions} onChange={setSort} />
      <Spacing size={1.25} />
      {wishList?.map((item, index) => (
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
