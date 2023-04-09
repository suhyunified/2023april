import Page from "@/shared/components/Page";
import WishNewStyle from "@/wish/components/WishNewStyle";
import WishNewCategory from "@/wish/components/WishNewCategory";
import WishNewContents from "@/wish/components/WishNewContents";

import { CreateWish } from "@/wish/types/apis";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { css } from "@emotion/react";
import { WishFormContext } from "@/wish/context/wishForm";
import Layout from "@/shared/components/Layout";
import { WishNewStep } from "@/wish/constants";
import Nav from "@/shared/components/Nav";
import { useNavigate } from "react-router-dom";
import useGuard from "@/shared/hooks/useGuard";

const WishNewPage = () => {
  useGuard({
    withAuth: true,
    withNickname: true,
  });
  const navigate = useNavigate();
  const [step, setStep] = useState<WishNewStep>(WishNewStep.Category);
  const [form, setForm] = useState<CreateWish.RequestBody>({
    category: "coin",
    content: "",
    title: "",
  });

  const handleBackClick = () => {
    if (step === WishNewStep.Category) navigate(-1);
    else if (step === WishNewStep.Style) setStep(WishNewStep.Category);
    else if (step === WishNewStep.Contents) setStep(WishNewStep.Style);
  };

  return (
    <WishFormContext.Provider
      value={{
        ...form,
        setForm,
      }}
    >
      <Layout>
        <Nav onBack={handleBackClick} />
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
