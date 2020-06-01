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

  @Prop({ default: {} })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public data!: Record<string, any>;

  @Prop({ required: true })
  public template!: string;

  private options = {
    theme: 'lucario',
    mode: 'text/x-vue',
    lineNumbers: true,
    line: true,
  };
}
