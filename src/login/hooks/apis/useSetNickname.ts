import { useMutation, useQuery } from "react-query";

import service from "./service";

export const useSetNickname = () => {
  return useMutation(service.setNickname);
};
