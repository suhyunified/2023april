import styled from "@emotion/styled";
import { colors } from "../constants";

import IconCategoryCoin from "@/shared/images/icon_category_coin.svg";
import IconCategoryLeaf from "@/shared/images/icon_category_leaf.svg";
import IconCategoryFlower from "@/shared/images/icon_category_flower.svg";
import IconCategoryBadge from "@/shared/images/icon_category_badge.svg";

import { css } from "@emotion/react";

export const CategoryType = {
  Coin: "coin",
  Leaf: "leaf",
  Flower: "flower",
  Badge: "badge",
} as const;

export type CategoryType = typeof CategoryType[keyof typeof CategoryType];

const CATEGORY_MAPPER: Record<CategoryType, { icon: string; name: string }> = {
  [CategoryType.Coin]: {
    icon: IconCategoryCoin,
    name: "금전",
  },
  [CategoryType.Leaf]: {
    icon: IconCategoryLeaf,
    name: "건강",
  },
  [CategoryType.Flower]: {
    icon: IconCategoryFlower,
    name: "행복",
  },
  [CategoryType.Badge]: {
    icon: IconCategoryBadge,
    name: "합격",
  },
};

interface Props {
  size?: number;
  type: CategoryType;
  clickable?: boolean;
  backgroundColor?: string;
  onClick?: (type: CategoryType) => void;
}
const Category = ({
  type,
  size = 4.5,
  clickable = true,
  backgroundColor = colors.gray900,
  onClick,
}: Props) => {
  return (
    <Container
      onClick={() => clickable && onClick?.(type)}
      css={css`
        width: ${size}rem;
        height: ${size}rem;
        cursor: ${clickable ? "pointer" : "normal"};
        background-color: ${backgroundColor || colors.gray900};
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        src={CATEGORY_MAPPER[type].icon}
        alt={`${CATEGORY_MAPPER[type].name}카테고리`}
      />
    </Container>
  );
};

export default Category;

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 50%;
`;
