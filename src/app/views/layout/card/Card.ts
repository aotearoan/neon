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

  private example = `<neon-card>
  <neon-card-header>
    <h1>Card header</h1>
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

  private examples = [
    {
      title: 'Card example',
      template: this.example,
      noCard: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonCard');
  }
}
