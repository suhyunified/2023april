import Button from "@/shared/components/Button";
import Flex from "@/shared/components/Flex";
import Nav from "@/shared/components/Nav";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import Text from "@/shared/components/Text";
import { colors } from "@/shared/constants";
import ImageCategoryCoin from "@/shared/images/icon_category_coin.png";
import ImageCategoryLeaf from "@/shared/images/icon_category_leaf.png";
import ImageCategoryFlower from "@/shared/images/icon_category_flower.png";
import ImageCategoryBadge from "@/shared/images/icon_category_badge.png";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Category, { CategoryType } from "@/shared/components/Category";
import { useContext } from "react";
import { WishFormContext } from "@/wish/context/wishForm";

interface Props {
  onSubmit: () => void;
}
const WishNewCategory = ({ onSubmit }: Props) => {
  const context = useContext(WishFormContext);

  const handleCategoryClick = (category: CategoryType) => {
    context.setForm?.((prev) => ({ ...prev, category }));
    onSubmit();
  };

  return (
    <>
      <Spacing size={2} />
      <Text size={1.375} weight={600} lineHeight={1.875} align="center">
        소원을 하나 들어줄게요.
        <br />
        자, 아래에서 하나 골라보세요!
      </Text>
      <div
        css={css`
          flex: 1;
          min-height: 100px;
          max-height: 300px;
        `}
      />
      <Flex justifyContents="center" fullWidth>
        <CategoryGrid>
          <Category type="coin" onClick={handleCategoryClick}></Category>
          <Category type="leaf" onClick={handleCategoryClick}></Category>
          <Category type="flower" onClick={handleCategoryClick}></Category>
          <Category type="badge" onClick={handleCategoryClick}></Category>
        </CategoryGrid>
      </Flex>
    </>
  );
};

export default WishNewCategory;

const CategoryGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;
