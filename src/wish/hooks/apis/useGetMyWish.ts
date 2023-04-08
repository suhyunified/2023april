import { ApiResponse } from "@/shared/types/api";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetMyWish = () => {
  return useQuery(queryKeys.getMyWish(), service.getMyWish);
};
