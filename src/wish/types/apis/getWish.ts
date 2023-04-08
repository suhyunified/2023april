import { CategoryType } from "@/shared/components/Category";

export interface RequestParams {
  wishId: number;
}

export interface Response {
  result: string;
  data: {
    id: number;
    ownerNickname: string;
    category: CategoryType;
    title: string;
    content: string;
    reactionCount: number;
    didReacted: boolean;
  };
}
