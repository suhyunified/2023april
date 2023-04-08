import { ApiResponse } from "@/shared/types/api";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "./queryKeys";

import service from "./service";
import { reactQuery } from "@/shared/utils/queryClient";

export const useLogin = () => {
  return useMutation(queryKeys.kakaoLogin(), service.login, {
    onSuccess: () => {
      reactQuery.queryClient.invalidateQueries(queryKeys.getProfile());
    },
  });
};
