import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonNote } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonNote,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
})
export default class Note extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display on page notifications to users';

  private data = {
    noteOpen: true,
  };

  private examples = [
    {
      title: 'Blockquote',
      template: `<blockquote>
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle
      activated charcoal bicycle rights adaptogen.</span>
</blockquote>`,
    },
    {
      title: 'Default note',
      template: `<neon-note>
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,
    },
    {
      title: 'Note with close',
      template: `<neon-note v-if="noteOpen" :closable="true" @close-note="noteOpen = false">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,
      data: this.data,
    },
    {
      title: 'Colored note',
      template: `<neon-note color="warn">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,
    },
    {
      title: 'Colored note without icon',
      template: `<neon-note color="error" :icon="false">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonNote');
  }
}
