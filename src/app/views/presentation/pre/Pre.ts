import { Component, Vue } from 'vue-property-decorator';
import { NeonPre } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonPre,
    ComponentDocumentation,
  },
})
export default class Pre extends Vue {
  private menuModel: MenuModel | null = null;

  private example = `<neon-pre>
<pre>
This is a sample code block

@import { xd } from 'lol';
</pre>
</neon-pre>`;

  private examples = [
    {
      title: 'Preformatted code block',
      template: this.example,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonPre');
  }
}
