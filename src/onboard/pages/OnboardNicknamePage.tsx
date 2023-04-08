import { useSetNickname } from "@/login/hooks/apis";
import Button from "@/shared/components/Button";
import Dialog from "@/shared/components/Dialog";
import Input from "@/shared/components/Input";
import Layout from "@/shared/components/Layout";

import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import { ApiResponse } from "@/shared/types/api";
import { css } from "@emotion/react";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardNicknamePage = () => {
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { mutateAsync } = useSetNickname();

  const handleButtonClick = async () => {
    try {
      await mutateAsync({ nickname });
      navigate("/");
    } catch (e) {
      const message =
        (e as AxiosError<ApiResponse<any>>).response?.data.error ||
        "오류가 발생했습니다.";
      setErrorMessage(message);
    }
  };

  return (
    <Layout>
      <Spacing size={5} />
      <Text
        size={1.4}
        color={colors.white}
        weight={700}
        lineHeight={1.8}
        align="center"
      >
        당신을 뭐라고 부를까요?
      </Text>
      <Spacing size={6.25} />
      <Input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        align="center"
        minLength={2}
        maxLength={5}
        placeholder="닉네임을 입력해주세요. 최대 5자"
      />
      <div
        css={css`
          flex: 1;
        `}
      />
      <Spacing size={2.5} />
      <Button onClick={handleButtonClick} disabled={!nickname.length}>
        시작하기
      </Button>
      <Dialog open={!!errorMessage} onClose={() => setErrorMessage("")}>
        {errorMessage}
      </Dialog>
    </Layout>
  );
};

export default OnboardNicknamePage;
