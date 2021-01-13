import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonAlertLevel } from '../../../../common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from '../../../../common/enums/NeonAlertPlacement';
import NeonIcon from '../../../presentation/icon/NeonIcon.vue';
import NeonLink from '../../../navigation/link/NeonLink.vue';
import { NeonAlertModel } from '../NeonAlertModel';

/**
 * This is an internal component for rendering alerts.
 */
@Component({
  components: {
    NeonIcon,
    NeonLink,
  },
})
export default class NeonAlertContainer extends Vue {
  @Prop({ required: true })
  private value!: NeonAlertModel[];

  @Prop({ required: true })
  private placement!: NeonAlertPlacement;

  private closeMessage(id: number) {
    this.$emit(
      'input',
      this.value.filter((msg) => msg.id !== id),
    );
  }

  private icon(level: NeonAlertLevel) {
    switch (level) {
      case NeonAlertLevel.Info:
        return 'info-circle';
      case NeonAlertLevel.Success:
        return 'check-circle';
      case NeonAlertLevel.Warn:
        return 'exclamation-circle';
      case NeonAlertLevel.Error:
        return 'times-circle';
    }
  }
}
