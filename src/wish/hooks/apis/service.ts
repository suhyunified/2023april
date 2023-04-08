import { ApiResponse } from "@/shared/types/api";
import { api } from "@/shared/utils/axios";
import { GetAccessToken, GetProfile } from "@/login/types/apis";
import {
  CreateWish,
  EditWish,
  GetMyWish,
  GetWish,
  GetWishList,
  PostReaction,
} from "@/wish/types/apis";
import queryString from "query-string";

interface Paginator<T> {
  pageParams: any[];
  pages: T[];
}

const service = {
  createWish: (body: CreateWish.RequestBody) =>
    api.post<CreateWish.Response>("/wish", body),

  editWish: (params: EditWish.RequestParams, body: EditWish.RequestBody) =>
    api.patch<CreateWish.Response>(`/wish/${params.wishId}`, body),

  getWish: (params: GetWish.RequestParams) =>
    api.get<GetWish.Response>(`/wish/${params.wishId}`),

  // getWishList: async (query: GetWishList.RequestQuery) => {
  getWishList: async ({ pageParams = 0 }) => {
    const qs = queryString.stringify({ page: pageParams });
    return await api.get<GetWishList.Response>(`/wish?${qs}`);
  },

  postReaction: (params: PostReaction.RequestParams) =>
    api.post<PostReaction.Response>(`/wish/${params.wishId}/reaction`),

  getMyWish: () => api.get<GetMyWish.Response>(`/wish/my`),
};

export default service;
