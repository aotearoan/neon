import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLink } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import { NeonToastService } from '@/common/utils/NeonToastService';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Link',
  components: {
    NeonCard,
    NeonCardBody,
    NeonLink,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display any type of link to the user');

    const toast = () => {
      NeonToastService.success({ title: 'Link clicked!' });
    };

    const template = `<div>
  <p>This is some text with a
    <neon-link href="/">link</neon-link>
    embedded in it.
  </p>
  <neon-link href="/">Router link</neon-link>
  <neon-link href="http://www.getskeleton.com" :external-indicator="true" target="_blank">External link
  </neon-link>
  <neon-link aria-label="Link title" @click="toast()">Link with click handler</neon-link>
</div>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonLink')));

    return {
      menuModel,
      headline,
      template,
      toast,
    };
  },
});
