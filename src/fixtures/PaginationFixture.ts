import type { NeonPaginationModel } from '@/model/navigation/pagination/NeonPaginationModel';

export const PaginationFixture = (total: number): NeonPaginationModel => ({
  page: 1,
  urlTemplate: '/products?page={page}',
  total,
  pageSize: 10,
  displayFirstAndLast: true,
});
