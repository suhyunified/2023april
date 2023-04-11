import styled from "@emotion/styled";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

import Nav from "@/shared/components/Nav";
import Page from "@/shared/components/Page";
import WishInfo from "@/wish/components/WishInfo";
import { useGetWish } from "@/wish/hooks/apis";
import { queryKeys } from "@/wish/hooks/apis/queryKeys";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Layout from "@/shared/components/Layout";
import useGuard from "@/shared/hooks/useGuard";

interface Params {
  wishId: string;
}

const WishPage = () => {
  useGuard({ withAuth: true });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const params = useParams();
  const { wishId } = params;
  const { data, isLoading } = useGetWish(+(wishId || 0));

  useEffect(() => {
    queryClient.invalidateQueries(queryKeys.getWish(+(wishId || 0)));
  }, [queryClient, wishId]);

  if (isLoading || !data) return <div />;

  return (
    <Layout>
      <Nav onBack={() => navigate("/")} />
      <Contents>
        <WishInfo wish={data?.data.data} />
      </Contents>
    </Layout>
  );
};

export default WishPage;

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
`;
