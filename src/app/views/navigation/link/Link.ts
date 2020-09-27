import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonLink, NeonToastService } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { ExampleModel } from '../../../components/example/ExampleModel';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonLink,
    ComponentDocumentation,
  },
})
export default class Link extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display any type of link to the user';

  private data = {
    toast: () => {
      NeonToastService.success({ title: 'Link clicked!' });
    },
  };

  private examples: ExampleModel[] = [
    {
      title: 'Link examples',
      template: `<div>
  <p>This is some text with a <a href=".">link</a> embedded in it.</p>
  <neon-link href=".">Router link</neon-link>
  <neon-link href="http://www.getskeleton.com" :external-indicator="true" target="_blank">External link</neon-link>
  <neon-link title="Link title" @click.native="toast()">Link with click handler</neon-link>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonLink');
  }
}
