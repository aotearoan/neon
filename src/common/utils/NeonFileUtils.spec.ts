import { fileToDataURL } from './NeonFileUtils';

describe('NeonFileUtils', () => {
  describe('fileToDataURL', () => {
    it('converts file to data URL', async () => {
      const file = new File(['hello'], 'hello.png', { type: 'image/png' });
      const result = await fileToDataURL(file);
      expect(result).toEqual('data:image/png;base64,aGVsbG8=');
    });
  });
});
