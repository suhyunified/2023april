import { ApiResponse } from "@/shared/types/api";
import { api } from "@/shared/utils/axios";
import { GetAccessToken, GetProfile } from "@/login/types/apis";

const service = {
  login: (params: any) =>
    api.get<ApiResponse<GetAccessToken.Response>>("/auth/access-token", {
      headers: {
        "X-Kakao-Auth-Code": params.code,
      },
    }),
  getProfile: () => api.get<GetProfile.Response>("/user"),
};

export default service;
