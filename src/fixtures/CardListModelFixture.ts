import type { NeonCardListModel } from '@/common/models/NeonCardListModel';

export interface CardListModel extends NeonCardListModel {
  title: string;
  description: string;
}

export const cardListModelFixture = (count: number, href?: string, offset = 0): Array<CardListModel> => {
  const result = [];

  for (let i = offset; i < count + offset; i++) {
    result.push({
      title: `Title ${i + 1}`,
      description: `Description ${i + 1}`,
      href,
      targetBlank: !!href,
      disabled: i === count + offset - 1,
    });
  }

  return result;
};
