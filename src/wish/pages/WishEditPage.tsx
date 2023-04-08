import WishNewStyle from "@/wish/components/WishNewStyle";
import WishNewCategory from "@/wish/components/WishNewCategory";
import WishNewContents from "@/wish/components/WishNewContents";

import { CreateWish } from "@/wish/types/apis";
import { useState } from "react";
import { WishFormContext } from "@/wish/context/wishForm";
import Layout from "@/shared/components/Layout";
import { WishNewStep } from "@/wish/constants";
import { useGetMyWish } from "../hooks/apis/useGetMyWish";

const WishEditPage = () => {
  const { data } = useGetMyWish();
  console.log(data);

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

export default WishEditPage;
