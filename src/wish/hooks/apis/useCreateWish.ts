import { ApiResponse } from "@/shared/types/api";
import { CreateWish } from "@/wish/types/apis";
import { useMutation } from "react-query";
import service from "./service";

export const useCreateWish = () => {
  return useMutation(service.createWish);
};
