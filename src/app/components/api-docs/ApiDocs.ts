import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonExpansionIndicator } from '../../../components';
import { DocumentationModel } from '../ApiModel';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonExpansionIndicator,
  },
})
export default class ApiDocs extends Vue {
  private expanded = false;

  @Prop({ required: true })
  public apiModel!: DocumentationModel;

  @Prop({ required: true })
  public componentName!: string;

  private requiredProps() {
    return this.apiModel && this.apiModel.props.some((prop) => prop.required);
  }
}
