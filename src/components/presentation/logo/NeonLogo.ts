import { Component, Prop, Vue } from 'vue-property-decorator';
import NeonIcon from '../icon/NeonIcon.vue';

/**
 * Component for displaying the SASS configured logo.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonLogo extends Vue {
  @Prop({ default: false })
  inverse!: boolean;
}
