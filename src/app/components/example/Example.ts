import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';
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

  private options = {
    theme: 'lucario',
    mode: 'text/x-vue',
    lineNumbers: true,
    line: true,
  };
}