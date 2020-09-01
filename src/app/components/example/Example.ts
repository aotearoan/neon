import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExampleModel } from './ExampleModel';
import Editor from '../editor/Editor.vue';

@Component({
  components: {
    Editor,
  },
})
export default class Example extends Vue {
  @Prop({ required: true })
  public example!: ExampleModel;

  @Prop({ default: 'html' })
  public language!: string;
}
