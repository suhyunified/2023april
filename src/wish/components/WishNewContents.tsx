import Button from "@/shared/components/Button";
import Category from "@/shared/components/Category";
import Flex from "@/shared/components/Flex";
import Nav from "@/shared/components/Nav";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import Textarea from "@/shared/components/Textarea";
import { colors } from "@/shared/constants";
import { css } from "@emotion/react";
import Dialog from "@/shared/components/Dialog";
import { useContext, useState } from "react";
import { useCreateWish } from "../hooks/apis";
import FlexGrow from "@/shared/components/FlexGrow";
import { ApiResponse } from "@/shared/types/api";
import { CreateWish } from "../types/apis";
import { WishFormContext } from "../context/wishForm";
import { useNavigate } from "react-router-dom";

const WishNewContents = () => {
  const navigate = useNavigate();
  const context = useContext(WishFormContext);
  const { mutateAsync, isLoading } = useCreateWish();

  const [contents, setContents] = useState("");
  console.log(context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) return;

    try {
      const { category, title } = context;
      const response = await mutateAsync({
        title,
        category,
        content: contents,
      });

      const {
        data: {
          data: { wishId },
        },
      } = response;
      navigate(`/wish/${wishId}`);
    } catch (e) {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <Nav />
      <Spacing size={2} />
      <Flex fullWidth justifyContents="center">
        <Category type={context.category} />
      </Flex>
      <Spacing size={1.5} />
      <Text
        size={1.375}
        weight={600}
        color={colors.gray100}
        align="center"
        lineHeight={1.875}
      >
        {context.title}
        <br />
        도라에몽스
      </Text>
      <FlexGrow minHeight={5} />
      <Textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        placeholder="당신의 목표는 무엇인가요? 자세히 작성한다면 분명 이루어질 거에요!"
      />
      <Spacing size={2} />
      <Button
        onClick={handleSubmit}
        disabled={contents.length < 10 || isLoading}
      >
        작성 완료
      </Button>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        잠시 후에 다시 시도해주세요.
      </Dialog>
    </>
  );
};

export default WishNewContents;
