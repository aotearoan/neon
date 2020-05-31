import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class Example extends Vue {
  @Prop({ required: true })
  public title!: string;

  @Prop({ required: true })
  public example!: string;

  private options = {
    theme: 'lucario',
    mode: 'text/x-vue',
    lineNumbers: true,
    line: true,
  };
}
