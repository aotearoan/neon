import type { NeonDialogMessage } from '@/model/feedback/dialog/NeonDialogMessage';
import { NeonEventBus } from '@/utils/common/event/NeonEventBus';
import { nextTick } from 'vue';
import { NeonDialogService } from './NeonDialogService';

describe('NeonDialogService', () => {
  let eventBusSpy: jest.SpyInstance | null = null;

  beforeEach(() => {
    eventBusSpy = jest.spyOn(NeonEventBus, 'emit');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('emits show dialog', async () => {
    const dialogMessage: NeonDialogMessage = {
      title: 'Dialog title',
      question: 'Dialog question',
    };
    NeonDialogService.show(dialogMessage);
    jest.runAllTicks();
    jest.runAllTimers();
    await nextTick();

    expect(eventBusSpy).toHaveBeenNthCalledWith(1, NeonDialogService.resolveEventKey, false);
    expect(eventBusSpy).toHaveBeenNthCalledWith(2, NeonDialogService.generateEventKey(), dialogMessage);
  });

  it('emits resolve event', () => {
    const key = true;
    NeonDialogService.resolve(key);
    expect(eventBusSpy).toHaveBeenCalledWith('neon--dialog-resolve', key);
  });

  it('generates event key', () => {
    expect(NeonDialogService.generateEventKey()).toEqual('neon--dialog');
  });
});
