import { NeonHttpUtils } from './NeonHttpUtils';

enum TestStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

describe('HttpUtils', () => {
  describe('urlWithQueryParams', () => {
    it('should generate a url with query params', () => {
      const searchParams = {
        searchOn: 'some text & more text',
        status: TestStatus.IN_PROGRESS.toString().toLowerCase(),
        sortOn: 'price',
      };
      const url = '/test/';
      expect(NeonHttpUtils.urlWithQueryParams(url, searchParams)).toEqual(
        `${url}?searchOn=some%20text%20%26%20more%20text&status=${TestStatus.IN_PROGRESS.toString().toLowerCase()}&sortOn=price`,
      );
    });

    it('should generate a url with no params', () => {
      const searchParams = {};
      const url = '/test/';
      expect(NeonHttpUtils.urlWithQueryParams(url, searchParams)).toEqual(url);
    });
  });

  describe('encodeObjectToHttpQueryParams', () => {
    it('should handle empty object', () => {
      const searchParams = {};
      expect(NeonHttpUtils.encodeObjectToHttpQueryParams(searchParams)).toEqual('');
    });

    it('should convert an object to encoded keys and values', () => {
      const searchParams = {
        searchOn: 'some text & more text',
        status: TestStatus.IN_PROGRESS.toString().toLowerCase(),
        sortOn: 'price',
      };
      expect(NeonHttpUtils.encodeObjectToHttpQueryParams(searchParams)).toEqual(
        `searchOn=some%20text%20%26%20more%20text&status=${TestStatus.IN_PROGRESS.toString().toLowerCase()}&sortOn=price`,
      );
    });

    it('should convert an array of strings into a comma separated list', () => {
      const searchParams = {
        filterOnType: ['type1', 'type2'],
      };
      expect(NeonHttpUtils.encodeObjectToHttpQueryParams(searchParams)).toEqual(`filterOnType=type1,type2`);
    });

    it('should not add empty array param', () => {
      const searchParams = {
        filterOnType: [],
      };
      expect(NeonHttpUtils.encodeObjectToHttpQueryParams(searchParams)).toEqual('');
    });
  });
});
