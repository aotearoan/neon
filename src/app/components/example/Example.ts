import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';
import { ExampleModel } from './ExampleModel';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Example extends Vue {
  @Prop({ required: true })
  public model!: ExampleModel;

  @Prop({ default: false })
  public inline!: boolean;

  private options = {
    theme: 'mbo',
    mode: 'text/x-vue',
    lineNumbers: false,
    line: true,
  };
}
