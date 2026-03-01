import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import NeonNote from '@/components/feedback/note/NeonNote.vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import type { NeonBannerModel } from '@/components/feedback/banner/NeonBannerModel';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import type { NeonBannerMessage } from '@/common/models/NeonBannerMessage';
import { NeonEventBus } from '@/common/utils/NeonEventBus';
import { NeonBannerService } from '@/common/utils/NeonBannerService';

/**
 * NeonBanner is a component for displaying important information to the user above the page content.
 */
export default defineComponent({
  name: 'NeonBanner',
  components: {
    NeonNote,
    NeonButton,
  },
  setup() {
    const messages = ref<Array<NeonBannerModel>>([]);

    const internalId = ref(1);

    const removeMessage = (message: NeonBannerModel) => {
      messages.value = messages.value.filter((m) => m.id !== message.id);
    };

    const enqueueMessage = (level: NeonAlertLevel, message: NeonBannerMessage) => {
      const id = internalId.value;
      internalId.value = internalId.value + 1;

      const msg: NeonBannerModel = {
        ...message,
        level,
        id,
      };

      messages.value.unshift(msg);
    };

    const onRemoveBanner = (key: string) => {
      const msgIndex = messages.value.findIndex((m) => m.key === key);
      if (msgIndex >= 0) {
        messages.value.splice(msgIndex, 1);
      }
    };

    const onInfoMessage = (message: NeonBannerMessage) => {
      enqueueMessage(NeonAlertLevel.Info, message);
    };

    const onSuccessMessage = (message: NeonBannerMessage) => {
      enqueueMessage(NeonAlertLevel.Success, message);
    };

    const onWarnMessage = (message: NeonBannerMessage) => {
      enqueueMessage(NeonAlertLevel.Warn, message);
    };

    const onErrorMessage = (message: NeonBannerMessage) => {
      enqueueMessage(NeonAlertLevel.Error, message);
    };

    const onAction = () => {
      const msg = messages.value[0];

      if (msg) {
        removeMessage(msg);
        msg.action.callback();
      }
    };

    onMounted(() => {
      NeonEventBus.on(NeonBannerService.generateEventKey(NeonAlertLevel.Info), onInfoMessage);
      NeonEventBus.on(NeonBannerService.generateEventKey(NeonAlertLevel.Success), onSuccessMessage);
      NeonEventBus.on(NeonBannerService.generateEventKey(NeonAlertLevel.Warn), onWarnMessage);
      NeonEventBus.on(NeonBannerService.generateEventKey(NeonAlertLevel.Error), onErrorMessage);
      NeonEventBus.on(NeonBannerService.removeEventKey, onRemoveBanner);
    });

    onUnmounted(() => {
      NeonEventBus.off(NeonBannerService.generateEventKey(NeonAlertLevel.Info), onInfoMessage);
      NeonEventBus.off(NeonBannerService.generateEventKey(NeonAlertLevel.Success), onSuccessMessage);
      NeonEventBus.off(NeonBannerService.generateEventKey(NeonAlertLevel.Warn), onWarnMessage);
      NeonEventBus.off(NeonBannerService.generateEventKey(NeonAlertLevel.Error), onErrorMessage);
      NeonEventBus.off(NeonBannerService.removeEventKey, onRemoveBanner);
    });

    return {
      onAction,
      messages,
    };
  },
});
