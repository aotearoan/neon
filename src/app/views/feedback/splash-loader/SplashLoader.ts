import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonLink, NeonSplashLoader } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonLink,
    NeonSplashLoader,
    ComponentDocumentation,
  },
})
export default class SplashLoader extends Vue {
  private menuModel: MenuModel | null = null;

  private data = {
    open: false,
    openLoader: () => {
      this.data.open = true;
      setTimeout(() => {
        this.data.open = false;
      }, 2500);
    },
  };

  private headline = 'Indicate loading progress';

  private examples = [
    {
      title: 'Splash loader example',
      template: `<div class="example--vertical">
  <neon-button label="Show loader" @click="openLoader()" />
  <neon-splash-loader v-if="open" :fullscreen="true" :overlay="true" size="xl" color="brand" />
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSplashLoader');
  }
}
