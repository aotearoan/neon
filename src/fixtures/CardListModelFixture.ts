import type { NeonIdentifiable } from '@/model/common/entity/NeonIdentifiable';
import type { NeonCardListModel } from '@/model/layout/card-list/NeonCardListModel';

export interface CardListModel extends NeonIdentifiable {
  title: string;
  description: string;
}

export const CardListModelFixture = (
  count: number,
  href?: string,
  offset = 0,
): Array<NeonCardListModel<CardListModel>> => {
  const result = [];

  for (let i = offset; i < count + offset; i++) {
    result.push({
      model: {
        id: `${i + 1}`,
        title: `Title ${i + 1}`,
        description: `Description ${i + 1}`,
      },
      href,
      disabled: i === count + offset - 1,
    });
  }

  return result;
};
