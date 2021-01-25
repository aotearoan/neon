import { NeonNumberUtils } from './NeonNumberUtils';

describe('NeonNumberUtils', () => {
  describe('parseNumber', () => {
    it('parse integer', () => {
      expect(NeonNumberUtils.parseNumber('123')).toEqual(123);
    });

    it('parse with separator', () => {
      expect(NeonNumberUtils.parseNumber('1,123')).toEqual(1123);
    });

    it('parse decimal', () => {
      expect(NeonNumberUtils.parseNumber('123.456')).toEqual(123.456);
    });

    it('parse negative', () => {
      expect(NeonNumberUtils.parseNumber('-123.456')).toEqual(-123.456);
    });

    it('parse 0', () => {
      expect(NeonNumberUtils.parseNumber('0')).toEqual(0);
    });

    it('parse junk', () => {
      expect(NeonNumberUtils.parseNumber('xdd')).toEqual(NaN);
    });
  });

  describe('formatNumber', () => {
    it('format integer', () => {
      expect(NeonNumberUtils.formatNumber(123)).toEqual('123');
    });

    it('format negative', () => {
      expect(NeonNumberUtils.formatNumber(-123)).toEqual('-123');
    });

    it('format 0', () => {
      expect(NeonNumberUtils.formatNumber(0)).toEqual('0');
    });

    it('format decimal', () => {
      expect(NeonNumberUtils.formatNumber(123.456)).toEqual('123.456');
    });

    it('format with separator', () => {
      expect(NeonNumberUtils.formatNumber(1123)).toEqual('1,123');
    });

    it('format percentage', () => {
      expect(NeonNumberUtils.formatNumber(0.422, { percentage: true })).toEqual('42.2%');
    });

    it('format decimals', () => {
      expect(NeonNumberUtils.formatNumber(0.426, { decimals: 2 })).toEqual('0.43');
    });

    it('format minimumFractionDigits', () => {
      expect(NeonNumberUtils.formatNumber(0.426, { minimumFractionDigits: 4 })).toEqual('0.4260');
    });

    it('format template', () => {
      // eslint-disable-next-line no-template-curly-in-string
      expect(NeonNumberUtils.formatNumber(240.34, { format: '${value}NZD' })).toEqual('$240.34NZD');
    });
  });
});
