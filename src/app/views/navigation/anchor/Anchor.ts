import { Component, Vue } from 'vue-property-decorator';
import { NeonActionMenu, NeonCard, NeonCardBody } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    ComponentDocumentation,
    Editor,
  },
})
export default class Anchor extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'HTML fragment scrolling helper';

  private example = '<neon-anchor id="functional-palettes" />';

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonAnchor');
  }
}
