import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NeonSideNav extends Vue {
  @Prop()
  public fullWidth?: boolean;
}
