import { GetWish } from ".";
import { WishInfoType } from "..";

export interface RequestQuery {
  page: number;
  sort: "CREATED_AT_DESC" | "REACTION_COUNT_DESC";
}

export interface Response {
  result: string;
  totalItems: number;
  currentPage: number;
  lastPage: number;
  data: WishInfoType[];
}
