import type { NeonLoadOnDemandModel } from '@/model/layout/card-list/NeonLoadOnDemandModel';

export const LoadOnDemandWithLabelsFixture = (total: number): NeonLoadOnDemandModel => ({
  total,
  resultCountLabel: 'Zeigt {count} von {total}',
  showMoreLabel: 'Mehr anzeigen',
});
