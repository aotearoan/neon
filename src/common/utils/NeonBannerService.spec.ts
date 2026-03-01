import { NeonEventBus } from './NeonEventBus';
import { NeonBannerService } from './NeonBannerService';
import type { NeonAlertAction } from '@/common/models/NeonAlertAction';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';

describe('NeonBannerService', () => {
  let eventBusSpy: NeonEventBus | null = null;
  const action: NeonAlertAction = {
    label: 'action 1',
    callback: jest.fn(),
  };

  beforeEach(() => {
    eventBusSpy = jest.spyOn(NeonEventBus, 'emit');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('emits info banner', () => {
    const infoMessage = {
      message: 'Info message',
      action,
    };
    NeonBannerService.info(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--banner-info', infoMessage);
  });

  it('emits success banner', () => {
    const infoMessage = {
      message: 'Success message',
      action,
    };
    NeonBannerService.success(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--banner-success', infoMessage);
  });

  it('emits warn banner', () => {
    const infoMessage = {
      message: 'Warn message',
      action,
    };
    NeonBannerService.warn(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--banner-warn', infoMessage);
  });

  it('emits error banner', () => {
    const infoMessage = {
      message: 'Error message',
      action,
    };
    NeonBannerService.error(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--banner-error', infoMessage);
  });

  it('emits remove banner', () => {
    const key = 'test-key';
    NeonBannerService.remove(key);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--banner-remove', key);
  });

  it('generates event key', () => {
    expect(NeonBannerService.generateEventKey(NeonAlertLevel.Error)).toEqual('neon--banner-error');
  });
});
