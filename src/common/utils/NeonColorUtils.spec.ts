import { NeonColorUtils } from './NeonColorUtils';

describe('NeonColorUtils', () => {
  it('converts rgb to hex', () => {
    expect(NeonColorUtils.rgbToHex([128, 128, 128])).toEqual('#808080');
    expect(NeonColorUtils.rgbToHex([1, 1, 1])).toEqual('#010101');
  });

  it('calculates luminance', () => {
    expect(NeonColorUtils.luminance([128, 128, 128])).toEqual(0.2158605001138992);
  });

  it('calculates luminance zero', () => {
    expect(NeonColorUtils.luminance([0, 0, 0])).toEqual(0);
  });

  it('converts to rgb', () => {
    expect(NeonColorUtils.toRgb('#808080')).toEqual([128, 128, 128]);
  });

  it('converts rgb to xyz', () => {
    expect(NeonColorUtils.rgbToXyz([128, 128, 128])).toEqual([
      0.5998708056221469,
      0.5998708256178397,
      0.5998708056221468,
    ]);
  });

  it('converts rgb to xyz with black', () => {
    expect(NeonColorUtils.rgbToXyz([0, 0, 0])).toEqual([
      0.137931034,
      0.137931034,
      0.137931034,
    ]);
  });

  it('converts rgb to Lab', () => {
    expect(NeonColorUtils.rgbToLab([128, 128, 128])).toEqual([
      53.585015771669404,
      -0.000009997846384113274,
      0.00000399913857584977,
    ]);
  });

  it('converts rgb to Hcl', () => {
    expect(NeonColorUtils.rgbToHcl([128, 128, 128])).toEqual([
      158,
      0.00001076801010721928,
      53.585015771669404,
    ]);
  });

  it('checks accessibility & fails', () => {
    expect(NeonColorUtils.isAccessible('#eeeeee', '#cccccc')).toEqual({
      largeAA: false,
      largeAAA: false,
      normalAA: false,
      normalAAA: false,
      ratio: 1.38,
    });
  });

  it('checks accessibility & succeeds', () => {
    expect(NeonColorUtils.isAccessible('#eeeeee', '#000000')).toEqual({
      largeAA: true,
      largeAAA: true,
      normalAA: true,
      normalAAA: true,
      ratio: 18.1,
    });
  });

  it('generates a palette', () => {
    expect(NeonColorUtils.generatePalette('#660066', '#000000', '#ffffff')).toEqual({
      d1: '#660166',
      d2: '#5d0f5d',
      d3: '#4b124a',
      d4: '#341333',
      d5: '#241823',
      l1: '#ad50aa',
      l2: '#c676c3',
      l3: '#de9cda',
      l4: '#f1c5ed',
      l5: '#ffeefe',
    });
  });

  it('generates a palette with blue adjustment', () => {
    expect(NeonColorUtils.generatePalette('#4000ff', '#000000', '#ffffff')).toEqual({
      d1: '#003aff',
      d2: '#0035df',
      d3: '#002aa0',
      d4: '#161f5e',
      d5: '#1c1a27',
      l1: '#0068ff',
      l2: '#3c8fff',
      l3: '#7fb3ff',
      l4: '#b7d4ff',
      l5: '#edf3ff',
    });
  });

  it('generates a palette with low contrast', () => {
    expect(NeonColorUtils.generatePalette('#666666', '#222222', '#cccccc')).toEqual({
      d1: '#555555',
      d2: '#494b4a',
      d3: '#383a39',
      d4: '#2b2529',
      d5: '#251721',
      l1: '#898989',
      l2: '#a1a3a2',
      l3: '#bbbdbc',
      l4: '#ddd6da',
      l5: '#ffeefb',
    });
  });

  it('generates a palette with low contrast lighter', () => {
    expect(NeonColorUtils.generatePalette('#ff0000', '#0000ff', '#ff00ff')).toEqual({
      d1: '#5e0000',
      d2: '#5a0000',
      d3: '#4e0000',
      d4: '#3b0000',
      d5: '#281713',
      l1: '#ffa876',
      l2: '#ffbb8e',
      l3: '#ffcca8',
      l4: '#ffdec6',
      l5: '#ffeee7',
    });
  });
});
