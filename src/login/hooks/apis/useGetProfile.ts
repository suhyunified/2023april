import { ApiResponse } from "@/shared/types/api";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";
import { GetAccessToken } from "../../types/apis";

export const useGetProfile = () => {
  return useQuery(queryKeys.getProfile(), service.getProfile);
};
