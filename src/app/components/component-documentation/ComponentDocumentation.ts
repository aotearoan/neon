import { Component, Prop, Vue } from 'vue-property-decorator';
import Example from '@/app/components/example/Example.vue';
import ApiDocs from '@/app/components/api-docs/ApiDocs.vue';
import { ExampleModel } from '../example/ExampleModel';
import { NeonCard, NeonCardBody, NeonCardHeader } from '@/components';

@Component({
  components: {
    ApiDocs,
    Example,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class ComponentDocumentation extends Vue {
  @Prop({ required: true })
  public componentName!: string;

  @Prop({ required: true })
  public componentTitle!: string;

  @Prop({ required: true })
  public path!: string;

  @Prop({ default: [] })
  public examples!: ExampleModel[];
}
