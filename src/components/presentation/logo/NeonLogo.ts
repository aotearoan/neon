import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * Component for displaying the SASS configured logo.
 */
@Component
export default class NeonLogo extends Vue {
  @Prop({ default: false })
  inverse!: boolean;
}
