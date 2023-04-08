import { ApiResponse } from "@/shared/types/api";
import { api } from "@/shared/utils/axios";
import { GetAccessToken, GetProfile, SetNickname } from "@/login/types/apis";

const service = {
  login: (params: any) =>
    api.get<GetAccessToken.Response>("/auth/access-token", {
      headers: {
        "X-Kakao-Auth-Code": params.code,
      },
    }),
  getProfile: () => api.get<ApiResponse<GetProfile.Response>>("/user"),
  setNickname: (params: SetNickname.RequestBody) =>
    api.post<ApiResponse<SetNickname.Response>>("/user/nickname", params),
};

export default service;
