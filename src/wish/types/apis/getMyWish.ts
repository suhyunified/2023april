import { WishInfoType } from "..";

export interface Response {
  result: string;
  data: WishInfoType & {
    isUpdateAvailable: boolean;
  };
}
