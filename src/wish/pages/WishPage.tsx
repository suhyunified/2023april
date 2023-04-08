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

interface Params {
  wishId: string;
}

const WishPage = () => {
  const queryClient = useQueryClient();

  const params = useParams();
  const navigate = useNavigate();
  const { wishId } = params;

  const { data, isLoading, error } = useGetWish(+(wishId || 0));

  useEffect(() => {
    queryClient.invalidateQueries(queryKeys.getWish(+(wishId || 0)));
  }, [queryClient, wishId]);

  if (error) navigate("/");
  if (isLoading || !data) return <div></div>;

  return (
    <Layout>
      <Nav />
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
