import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader } from '../../../components';
import { ExampleModel } from '../example/ExampleModel';
import Example from '../example/Example.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    Example,
  },
})
export default class Examples extends Vue {
  @Prop({ required: true })
  public examples!: ExampleModel[];
}
