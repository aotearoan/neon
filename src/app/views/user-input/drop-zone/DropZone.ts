import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonDropZone, NeonInput } from '@/neon';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'DropZone',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonInput,
    NeonDropZone,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A target for uploading files');

    const dropZoneExamples = `<div class="neon-horizontal drop-zone-examples">
  <neon-drop-zone>
    <span>Drop files here to upload</span>
  </neon-drop-zone>
  <neon-drop-zone :circular="true" :disabled="false">
    <span>Circular drop zone</span>
  </neon-drop-zone>
</div>`;

    const examples = ref([
      {
        title: 'Drop zone example',
        template: dropZoneExamples,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonDropZone'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
