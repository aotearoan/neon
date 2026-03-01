import type { NeonLoadOnDemandModel } from '@/common/models/NeonLoadOnDemandModel';

export const LoadOnDemandWithLabelsFixture = (total: number): NeonLoadOnDemandModel => ({
  total,
  ofLabel: 'von',
  showMoreLabel: 'Mehr anzeigen',
  endOfResultsLabel: 'Keine Daten mehr',
});
