import { CreateWish } from "@/wish/types/apis";
import { createContext, Dispatch, SetStateAction } from "react";

interface WishNewContextProps extends CreateWish.RequestBody {
  setForm?: Dispatch<SetStateAction<CreateWish.RequestBody>>;
}
export const WishFormContext = createContext<WishNewContextProps>({
  category: "coin",
  content: "",
  title: "",
});
