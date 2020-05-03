import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NeonCardBody extends Vue {
  @Prop({ default: false })
  public fullWidth!: boolean;
}
