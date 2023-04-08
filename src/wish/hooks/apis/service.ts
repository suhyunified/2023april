import { ApiResponse } from "@/shared/types/api";
import { api } from "@/shared/utils/axios";
import { GetAccessToken, GetProfile } from "@/login/types/apis";
import {
  CreateWish,
  GetWish,
  GetWishList,
  PostReaction,
} from "@/wish/types/apis";
import queryString from "query-string";

const service = {
  createWish: (params: CreateWish.RequestBody) =>
    api.post<CreateWish.Response>("/wish", params),
  getWish: (params: GetWish.RequestParams) =>
    api.get<GetWish.Response>(`/wish/${params.wishId}`),
  getWishList: (query: GetWishList.RequestQuery) => {
    const qs = queryString.stringify(query);
    return api.get<GetWishList.Response>(`/wish?${qs}`);
  },
  postReaction: (params: PostReaction.RequestParams) =>
    api.post<PostReaction.Response>(`/wish/${params.wishId}/reaction`),
};

export default service;
