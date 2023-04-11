import { GetProfile } from "@/login/types/apis";
import { LOGIN_COOKIE_KEY } from "@/shared/constants";
import { ApiResponse } from "@/shared/types/api";
import { setCookie } from "@/shared/utils/cookie";
import { stepConnectorClasses } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "./queryKeys";
import service from "./service";

export const useGetProfile = () => {
  return useQuery<AxiosResponse<GetProfile.Response>, AxiosError>(
    queryKeys.getProfile(),
    service.getProfile
  );
};
