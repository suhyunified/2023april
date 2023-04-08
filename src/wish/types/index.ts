import { GetWish, GetWishList } from "./apis";

export type WishInfoType = GetWish.Response["data"];
export type WishSort = GetWishList.RequestQuery["sort"];
