import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class NeonAnchor extends Vue {
  @Prop()
  public id?: string;
}
