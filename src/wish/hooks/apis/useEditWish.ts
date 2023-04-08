import { ApiResponse } from "@/shared/types/api";
import { CreateWish, EditWish } from "@/wish/types/apis";
import { useMutation } from "react-query";
import service from "./service";

export const useEditWish = () => {
  return useMutation(
    ({ wishId, ...rest }: EditWish.RequestBody & EditWish.RequestParams) =>
      service.editWish({ wishId }, rest)
  );
};
