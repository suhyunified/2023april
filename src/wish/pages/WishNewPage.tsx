import Page from "@/shared/components/Page";
import WishNewStyle from "@/wish/components/WishNewStyle";
import WishNewCategory from "@/wish/components/WishNewCategory";
import WishNewContents from "@/wish/components/WishNewContents";

import { CreateWish } from "@/wish/types/apis";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { css } from "@emotion/react";
import { WishFormContext } from "@/wish/context/wishForm";
import Layout from "@/shared/components/Layout";

export const WishNewStep = {
  Style: "style",
  Category: "category",
  Contents: "contents",
} as const;
export type WishNewStep = typeof WishNewStep[keyof typeof WishNewStep];

const WishNewPage = () => {
  const [step, setStep] = useState<WishNewStep>(WishNewStep.Category);
  const [form, setForm] = useState<CreateWish.RequestBody>({
    category: "coin",
    content: "",
    title: "",
  });

  return (
    <WishFormContext.Provider
      value={{
        ...form,
        setForm,
      }}
    >
      <Layout>
        {step === WishNewStep.Category && (
          <WishNewCategory onSubmit={() => setStep(WishNewStep.Style)} />
        )}
        {step === WishNewStep.Style && (
          <WishNewStyle onSubmit={() => setStep(WishNewStep.Contents)} />
        )}
        {step === WishNewStep.Contents && <WishNewContents />}
      </Layout>
    </WishFormContext.Provider>
  );
};

export default WishNewPage;
