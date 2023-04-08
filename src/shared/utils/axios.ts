import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "../types/api";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: "https://wishbone-api-ge3ydnrdua-du.a.run.app/api/v1",
});

const getConfigs = (
  config: AxiosRequestConfig<any>
): AxiosRequestConfig<any> => {
  const accessToken = getCookie("_l_access");

  const headers = {
    ...config.headers,
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
  };

  return { ...config, headers };
};

export const api = {
  get: async <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config: AxiosRequestConfig<D> = {}
  ): Promise<R> => {
    return await instance.get(url, getConfigs(config));
  },

  post: async <T = any, R = ApiResponse<T>, D = any>(
    url: string,
    data?: D,
    config: AxiosRequestConfig<D> = {}
  ): Promise<R> => {
    return await instance.post(url, data, getConfigs(config));
  },

  patch: async <T = any, R = ApiResponse<T>, D = any>(
    url: string,
    data?: D,
    config: AxiosRequestConfig<D> = {}
  ): Promise<R> => {
    return await instance.patch(url, data, getConfigs(config));
  },
};
