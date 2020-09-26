import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import NeonIcon from '../../../presentation/icon/NeonIcon.vue';
import { NeonToastModel } from '../NeonToastModel';
import { NeonVerticalPosition } from '../../../../common/enums/NeonVerticalPosition';

/**
 * This is an internal component for rendering alerts.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonAlertContainer extends Vue {
  @Prop({ required: true })
  private value!: NeonToastModel[];

  @Prop({ required: true })
  private placement!: NeonVerticalPosition;

  private closeMessage(id: number) {
    this.$emit(
      'input',
      this.value.filter((msg) => msg.id !== id),
    );
  }
}
