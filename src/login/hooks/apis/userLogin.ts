import { ApiResponse } from "@/shared/types/api";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";
import { GetAccessToken } from "../../types/apis";
import { reactQuery } from "@/shared/utils/queryClient";

export const useLogin = () => {
  return useMutation(service.login, {
    onSuccess: async () => {
      await reactQuery.queryClient.invalidateQueries(queryKeys.getProfile());
    },
  });
};
