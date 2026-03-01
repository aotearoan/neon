import type { NeonPaginationModel } from '@/common/models/NeonPaginationModel';

export const PaginationFixture = (total: number): NeonPaginationModel => ({
  page: 1,
  urlTemplate: '/products?page={page}',
  total,
  pageSize: 10,
  displayFirstAndLast: true,
});
