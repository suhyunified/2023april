import { GetWishList } from "@/wish/types/apis";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetWishList = ({ page, sort }: GetWishList.RequestQuery) => {
  return useQuery(queryKeys.getWishList(page, sort), () =>
    service.getWishList({ page, sort })
  );
};
