import { CategoryType } from "@/shared/components/Category";

export interface RequestParams {
  wishId: number;
}
export interface RequestBody {
  category: CategoryType;
  title: string;
  content: string;
}

export interface Response {
  result: string;
  data: {
    wishId: number;
    category: string;
    title: string;
    content: string;
  };
}
