import MainHero from "@/main/components/MainHero";
import MainWishList from "@/main/components/MainWishList";
import { ListOrderBy } from "@/main/constants";
import Layout from "@/shared/components/Layout";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Switch from "@/shared/components/Switch";
import Text from "@/shared/components/Text";
import { colors, LOGIN_COOKIE_KEY } from "@/shared/constants";
import useGuard from "@/shared/hooks/useGuard";
import { api } from "@/shared/utils/axios";
import { getCookie } from "@/shared/utils/cookie";

import { WishInfoType, WishSort } from "@/wish/types";
import { GetWish, GetWishList } from "@/wish/types/apis";
import { parse } from "query-string/base";

import { useEffect, useState } from "react";
import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";
import { useLocation, useNavigate } from "react-router";

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

const HomePage = () => {
  useGuard({
    withAuth: true,
    withNickname: true,
  });
  const navigate = useNavigate();
  const isLogin = getCookie(LOGIN_COOKIE_KEY);

  const [totalCounts, setTotalCounts] = useState(0);
  const [sort, setSort] = useState<WishSort>(ListOrderBy.Reaction);

  const fetchPosts = async ({
    pageParam = 0,
  }): Promise<GetWishList.Response> => {
    const { data } = await api.get(`/wish?page=${pageParam}&sort=${sort}`);
    setTotalCounts(data.totalItems);
    return data;
  };

  const {
    data,
    fetchNextPage,
    isFetching,
    refetch,
  }: UseInfiniteQueryResult<GetWishList.Response> = useInfiniteQuery(
    "posts",
    fetchPosts,
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.currentPage >= lastPage.lastPage
          ? undefined
          : lastPage.currentPage;
      },
    }
  );

  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin]);

  useEffect(() => {
    refetch();
  }, [sort]);

  const allItems = data?.pages.map((page) => {
    return page.data;
  });

  const handleScroll = async (event: Event) => {
    if (isFetching) return;
    const target = event.target as Document;
    const clientHeight = target.scrollingElement?.clientHeight || 0;
    const scrollTop = target.scrollingElement?.scrollTop || 0;
    const scrollHeight = target.scrollingElement?.scrollHeight || 0;

    if (clientHeight + scrollTop + 100 > scrollHeight) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <Layout>
      <Spacing size={1.25} />
      <MainHero counts={totalCounts} />

      <Spacing size={1.875} />
      <Text size={1.125} weight={700} color={colors.gray100} lineHeight={1.5}>
        다른 친구들은
        <br />
        이런 소원을 작성했어요.
      </Text>
      <Spacing size={0.625} />

      <Switch options={ListOrderBySwitchOptions} onChange={setSort} />
      <Spacing size={1.25} />
      {allItems?.map((items) => (
        <MainWishList items={items} />
      ))}
    </Layout>
  );
};
export default HomePage;
