import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    ComponentDocumentation,
  },
})
export default class Card extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A component for content layout within a page';

  private example = `<neon-card>
  <neon-card-header>
    <h4>Card header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Card body</p>
  </neon-card-body>
  <neon-card-body>
    <p>Another card body. Cards can also have full width sections without an padding (this is useful for adding images, charts, etc). The following section is full width:</p>
  </neon-card-body>
  <neon-card-body :full-width="true">
    <img src="https://i.picsum.photos/id/610/2000/300.jpg?hmac=Oa-gKut7zX0Q1zmsjyrhmJvSMP72MB0jeJN3zPOiucc">
  </neon-card-body>
  <neon-card-body>
    <p>Place card actions inside the <strong>NeonCardFooter</strong> below:</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button label="Cancel" />
    <neon-button label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`;

  private horizontalExample = `<neon-card orientation="horizontal">
  <neon-card-header>
    <h4>Header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket.</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button size="s" label="Cancel" />
    <neon-button size="s" label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`;

  private examples = [
    {
      title: 'Vertical card',
      template: this.example,
      noCard: true,
    },
    {
      title: 'Horizontal card',
      template: this.horizontalExample,
      noCard: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonCard');
  }
}
