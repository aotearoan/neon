import { NeonEventBus } from './NeonEventBus';
import { NeonToastService } from './NeonToastService';
import { NeonVerticalPosition } from '@/common/enums/NeonVerticalPosition';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';

describe('NeonToastService', () => {
  let eventBusSpy: NeonEventBus | null = null;

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
      placement: NeonVerticalPosition.Top,
      duration: 42,
      dismissible: true,
    };
    NeonToastService.info(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--toast-info', infoMessage);
  });

  it('emits success alert', () => {
    const infoMessage = {
      title: 'Success title',
      message: 'Success message',
      placement: NeonVerticalPosition.Top,
      duration: 42,
      dismissible: true,
    };
    NeonToastService.success(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--toast-success', infoMessage);
  });

  it('emits warn alert', () => {
    const infoMessage = {
      title: 'Warn title',
      message: 'Warn message',
      placement: NeonVerticalPosition.Top,
      duration: 42,
      dismissible: true,
    };
    NeonToastService.warn(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--toast-warn', infoMessage);
  });

  it('emits error alert', () => {
    const infoMessage = {
      title: 'Error title',
      message: 'Error message',
      placement: NeonVerticalPosition.Top,
      duration: 42,
      dismissible: true,
    };
    NeonToastService.error(infoMessage);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--toast-error', infoMessage);
  });

  it('generates event key', () => {
    expect(NeonToastService.generateEventKey(NeonAlertLevel.Error)).toEqual('neon--toast-error');
  });
});
