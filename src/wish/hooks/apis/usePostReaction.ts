import { reactQuery } from "@/shared/utils/queryClient";
import { useMutation } from "react-query";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const usePostReaction = () => {
  return useMutation((wishId: number) => service.postReaction({ wishId }), {
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
      //   reactQuery.queryClient.invalidateQueries();
    },
  });
};
