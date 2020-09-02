import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExampleModel } from '../example/ExampleModel';
import Example from '../example/Example.vue';

@Component({
  components: {
    Example,
  },
})
export default class Examples extends Vue {
  @Prop({ required: true })
  public examples!: ExampleModel[];
}
