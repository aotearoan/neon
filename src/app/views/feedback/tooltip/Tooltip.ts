import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonTooltip } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonTooltip,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
})
export default class Tooltip extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Contextual information popups';

  private examples = [
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
      <span class="neon-h6">Popover content</span>
      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>
    </template>
  </neon-tooltip> to see the popover style.</p>
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
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonTooltip');
  }
}
