import type { NeonLoadOnDemandModel } from '@/model/layout/card-list/NeonLoadOnDemandModel';

export const LoadOnDemandWithLabelsFixture = (total: number): NeonLoadOnDemandModel => ({
  total,
  ofLabel: 'von',
  showMoreLabel: 'Mehr anzeigen',
  endOfResultsLabel: 'Keine Daten mehr',
});
