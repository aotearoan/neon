import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  NeonBannerService,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonInline,
  NeonLink,
  NeonStack,
  NeonVerticalPosition,
} from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLink,
    NeonStack,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display sticky notifications at the top of the page');

    const infoMessage = () => {
      NeonBannerService.info({
        message:
          '<strong>Account verification pending.</strong> You haven’t started the onboarding or it’s in progress',
        action: {
          label: 'Dismiss',
          callback: () => {
            console.log('Dismiss clicked');
          },
        },
      });
    };

    const successMessage = () => {
      NeonBannerService.success({
        message: '<strong>Success!</strong> This is an example of a success message.',
        action: {
          label: 'Dismiss',
          callback: () => {
            console.log('Dismiss clicked');
          },
        },
      });
    };

    const warnMessage = () => {
      NeonBannerService.warn({
        message: '<strong>Caution!</strong> This is an example of a warning message.',
        action: {
          label: 'Dismiss',
          callback: () => {
            console.log('Dismiss clicked');
          },
        },
      });
    };

    const errorMessage = () => {
      NeonBannerService.error({
        message: '<strong>Error!</strong> This is an example of an error message.',
        action: {
          label: 'Dismiss',
          callback: () => {
            console.log('Dismiss clicked');
          },
        },
      });
    };

    const typesTemplate = `<neon-button color="info" label="Info" @click="infoMessage()" />
<neon-button color="success" label="Success" @click="successMessage()" />
<neon-button color="warn" label="Warning" @click="warnMessage()" />
<neon-button color="error" label="Error" @click="errorMessage()" />`;

    const infoExample = computed(
      () => `NeonBannerService.info({
  message: '<strong>Information:</strong> This is an example of an info message.',
  action: {
    label: 'Dismiss',
    callback: () => {
      console.log('Dismiss clicked');
    },
  },
});`,
    );

    const successExample = computed(
      () => `NeonBannerService.success({
  message: '<strong>Success!</strong> This is an example of a success message.',
  action: {
    label: 'Dismiss',
    callback: () => {
      console.log('Dismiss clicked');
    },
  },
});`,
    );

    const warnExample = computed(
      () => `NeonBannerService.warn({
  message: '<strong>Caution!</strong> This is an example of a warning message.',
  action: {
    label: 'Dismiss',
    callback: () => {
      console.log('Dismiss clicked');
    },
  },
});`,
    );

    const errorExample = computed(
      () => `NeonBannerService.error({
  message: '<strong>Error!</strong> This is an example of an error message.',
  action: {
    label: 'Dismiss',
    callback: () => {
      console.log('Dismiss clicked');
    },
  },
});`,
    );

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonBanner')));

    return {
      menuModel,
      headline,
      infoExample,
      successExample,
      warnExample,
      errorExample,
      infoMessage,
      successMessage,
      warnMessage,
      errorMessage,
      typesTemplate,
      NeonVerticalPosition,
    };
  },
});
