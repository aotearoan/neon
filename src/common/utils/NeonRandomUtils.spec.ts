import { NeonRandomUtils } from './NeonRandomUtils';

describe('NeonRandomUtils', () => {
  it('gets random number', () => {
    expect(NeonRandomUtils.rand('123')()).toEqual(0.565198436146602);
  });
});
