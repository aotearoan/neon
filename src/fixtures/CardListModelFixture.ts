import type { NeonIdentifiable, NeonSelectable } from '@/neon';
import type { NeonCardListModel } from '@/model/layout/card-list/NeonCardListModel';

export interface CardListModel extends NeonIdentifiable, NeonSelectable {
  title: string;
  description: string;
}

export const CardListModelFixture = (
  count: number,
  href?: string,
  offset = 0,
  selectable = false,
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
      selected: selectable && i < 2,
    });
  }

  return result;
};
