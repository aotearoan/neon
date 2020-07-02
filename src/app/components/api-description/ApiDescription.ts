import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';
import { DocumentationModel } from '../ApiModel';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
  },
})
export default class ApiDescription extends Vue {
  @Prop({ required: true })
  public apiModel!: DocumentationModel;

  @Prop({ required: true })
  public componentTitle!: string;
}
