import { GetWishList } from "@/wish/types/apis";
import { useInfiniteQuery, useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetWishList = () => {
  return useInfiniteQuery(["page", "sort"], service.getWishList, {
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.currentPage + 1;

      return nextPage > lastPage.data.lastPage
        ? lastPage.data.lastPage
        : nextPage;
    },
  });
};
