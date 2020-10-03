import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExampleModel } from './ExampleModel';
import Editor from '../editor/Editor.vue';
import NeonCardHeader from '../../../components/layout/card/header/NeonCardHeader.vue';
import NeonCardBody from '../../../components/layout/card/body/NeonCardBody.vue';
import NeonCard from '../../../components/layout/card/NeonCard.vue';
import NeonNote from '../../../components/feedback/note/NeonNote.vue';

@Component({
  components: {
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNote,
  },
})
export default class Example extends Vue {
  @Prop({ required: true })
  public example!: ExampleModel;

  @Prop({ default: 'html' })
  public language!: string;
}
