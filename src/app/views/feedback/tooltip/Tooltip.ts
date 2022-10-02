import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonTooltip } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tooltip',
  components: {
    NeonTooltip,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Contextual information popups');

    const examples = ref([
      {
        title: 'Tooltip styles',
        template: `<div>
  <p>Hover over
  <neon-tooltip>
    <template #target>
      <strong>me</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip> to see the tooltip style.</p>
  <p>Hover over
  <neon-tooltip tooltip-style="popover">
    <template #target>
      <strong>me</strong>
    </template>
    <template #content>
      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>
    </template>
  </neon-tooltip> to see the popover style.</p>
  <br />
  <neon-tooltip tooltip-style="popover" outline-style="border" outline-color="low-contrast">
    <template #target>
      <neon-button size="s" label="Hover me" />
    </template>
    <template #content>
      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>
    </template>
  </neon-tooltip>
</div>`,
      },
      {
        title: 'Tooltip placement',
        template: `<div>
  <!-- top -->
  <p>Tooltip placement
  <neon-tooltip>
    <template #target>
      <strong>top</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- left -->
  <p>Tooltip placement
  <neon-tooltip placement="left">
    <template #target>
      <strong>left</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- bottom -->
  <p>Tooltip placement
  <neon-tooltip placement="bottom">
    <template #target>
      <strong>bottom</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- right -->
  <p>Tooltip placement
  <neon-tooltip placement="right">
    <template #target>
      <strong>right</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
</div>`,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTooltip')));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
