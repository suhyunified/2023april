import { CategoryType } from "@/shared/components/Category";

export interface RequestBody {
  category: CategoryType;
  title: string;
  content: string;
}

export interface Response {
  wishId: number;
  category: string;
  title: string;
  content: string;
}
