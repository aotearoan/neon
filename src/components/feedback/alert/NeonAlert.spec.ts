import { NeonAlertService } from './NeonAlert';

describe('NeonAlert', () => {
  beforeEach(() => {
    NeonAlertService._instance.$snotify.info = jest.fn();
    NeonAlertService._instance.$snotify.success = jest.fn();
    NeonAlertService._instance.$snotify.warning = jest.fn();
    NeonAlertService._instance.$snotify.error = jest.fn();
  });

  describe('info()', () => {
    it('title only', () => {
      // when
      NeonAlertService.info('test title');
      // then
      expect(NeonAlertService._instance.$snotify.info).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      NeonAlertService.info('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.info).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('success()', () => {
    it('title only', () => {
      // when
      NeonAlertService.success('test title');
      // then
      expect(NeonAlertService._instance.$snotify.success).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      NeonAlertService.success('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.success).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('warning()', () => {
    it('title only', () => {
      // when
      NeonAlertService.warning('test title');
      // then
      expect(NeonAlertService._instance.$snotify.warning).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      NeonAlertService.warning('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.warning).toHaveBeenCalledWith('body', 'test title');
    });
  });

  describe('error()', () => {
    it('title only', () => {
      // when
      NeonAlertService.error('test title');
      // then
      expect(NeonAlertService._instance.$snotify.error).toHaveBeenCalledWith('', 'test title');
    });

    it('title and body', () => {
      // when
      NeonAlertService.error('test title', 'body');
      // then
      expect(NeonAlertService._instance.$snotify.error).toHaveBeenCalledWith('body', 'test title');
    });
  });
});
