import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonColor } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonColor,
  },
})
export default class Color extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Enhanced HTML native color picker';

  private data = {
    colorSmall: '#FF6F61',
    colorMedium: '#FF6F61',
    colorLarge: '#FF6F61',
  };

  private colorSizeExamples = `<div class="neon-vertically-spaced">
  <neon-color size="s" v-model="colorSmall" placeholder="Choose a color" />
  <neon-color size="m" v-model="colorMedium" placeholder="Choose a color" />
  <neon-color size="l" v-model="colorLarge" placeholder="Choose a color" />
</div>`;

  private examples = [
    {
      title: 'Color input sizes',
      template: this.colorSizeExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonColor');
  }
}
