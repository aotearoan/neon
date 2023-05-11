import { NeonEventBus } from './NeonEventBus';
import { NeonAlertService } from './NeonAlertService';
import { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';
import type { NeonAlertAction } from '@/common/models/NeonAlertAction';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';

describe('NeonAlertService', () => {
  let eventBusSpy: NeonEventBus | null = null;
  const primaryAction: NeonAlertAction = {
    label: 'action 1',
    callback: jest.fn(),
  };
  const secondaryAction: NeonAlertAction = {
    label: 'action 2',
    callback: jest.fn(),
  };

  beforeEach(() => {
    eventBusSpy = jest.spyOn(NeonEventBus, 'emit');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('emits info alert', () => {
    const infoMessage = {
      title: 'Info title',
      message: 'Info message',
      placement: NeonAlertPlacement.TopLeft,
      duration: 42,
      dismissible: true,
      primaryAction,
      secondaryAction,
    };
    NeonAlertService.info(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--alert-info', infoMessage);
  });

  it('emits success alert', () => {
    const infoMessage = {
      title: 'Success title',
      message: 'Success message',
      placement: NeonAlertPlacement.TopLeft,
      duration: 42,
      dismissible: true,
      primaryAction,
      secondaryAction,
    };
    NeonAlertService.success(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--alert-success', infoMessage);
  });

  it('emits warn alert', () => {
    const infoMessage = {
      title: 'Warn title',
      message: 'Warn message',
      placement: NeonAlertPlacement.TopLeft,
      duration: 42,
      dismissible: true,
      primaryAction,
      secondaryAction,
    };
    NeonAlertService.warn(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--alert-warn', infoMessage);
  });

  it('emits error alert', () => {
    const infoMessage = {
      title: 'Error title',
      message: 'Error message',
      placement: NeonAlertPlacement.TopLeft,
      duration: 42,
      dismissible: true,
      primaryAction,
      secondaryAction,
    };
    NeonAlertService.error(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--alert-error', infoMessage);
  });

  it('generates event key', () => {
    expect(NeonAlertService.generateEventKey(NeonAlertLevel.Error)).toEqual('neon--alert-error');
  });
});
