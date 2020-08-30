import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExampleModel } from './ExampleModel';

@Component({})
export default class Example extends Vue {
  @Prop({ required: true })
  public example!: ExampleModel;

  private options = {
    theme: 'mbo',
    mode: 'text/x-vue',
    lineNumbers: false,
    line: true,
  };
}
