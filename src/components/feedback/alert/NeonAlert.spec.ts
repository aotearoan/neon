import { NeonAlertService } from './NeonAlert';

describe('NeonAlert', () => {
  beforeEach(() => {
    NeonAlertService._instance.$snotify.info = jest.fn();
    NeonAlertService._instance.$snotify.success = jest.fn();
    NeonAlertService._instance.$snotify.warning = jest.fn();
    NeonAlertService._instance.$snotify.error = jest.fn();
  });

  const instance = new NeonAlertService();

  describe('info()', () => {
    it('title only', () => {
      // when
      instance.info('test title');
      // then
      expect(NeonAlertService._instance.$snotify.info).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      instance.info('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.info).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('success()', () => {
    it('title only', () => {
      // when
      instance.success('test title');
      // then
      expect(NeonAlertService._instance.$snotify.success).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      instance.success('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.success).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('warning()', () => {
    it('title only', () => {
      // when
      instance.warning('test title');
      // then
      expect(NeonAlertService._instance.$snotify.warning).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      instance.warning('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.warning).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('error()', () => {
    it('title only', () => {
      // when
      instance.error('test title');
      // then
      expect(NeonAlertService._instance.$snotify.error).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      instance.error('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.error).toHaveBeenCalledWith('body', 'test title');
    });
  });
});
