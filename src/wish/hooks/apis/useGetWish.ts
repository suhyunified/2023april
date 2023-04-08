import { ApiResponse } from "@/shared/types/api";
import { CreateWish, GetWish } from "@/wish/types/apis";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetWish = (wishId: number) => {
  return useQuery(queryKeys.getWish(wishId), () => service.getWish({ wishId }));
};
