import { ApiResponse } from "@/shared/types/api";
import { useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetProfile = () => {
  return useQuery(queryKeys.getProfile(), service.getProfile);
};
