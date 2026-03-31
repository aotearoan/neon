import { moveItem } from './NeonArrayUtils';

describe('NeonArrayUtils', () => {
  describe('moveItem', () => {
    it('does not resort when start/end indexes are the same', () => {
      const items = [1, 2, 3, 4, 5];
      expect(moveItem<number>(items, 2, 2)).toEqual(items);
    });

    it('moves item up list', () => {
      const items = [1, 2, 3, 4, 5];
      const expected = [1, 4, 2, 3, 5];
      expect(moveItem<number>(items, 3, 1)).toEqual(expected);
    });

    it('moves item down list', () => {
      const items = [1, 2, 3, 4, 5];
      const expected = [2, 3, 4, 1, 5];
      expect(moveItem<number>(items, 0, 3)).toEqual(expected);
    });
  });
});
