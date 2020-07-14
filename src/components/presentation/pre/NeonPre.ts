import { Component, Vue } from 'vue-property-decorator';
import { NeonClipboardService } from '../../../common/utils/NeonClipboardService';
import NeonButton from '../../user-input/button/NeonButton.vue';
import { NeonAlertService } from '../../feedback/alert/NeonAlert';

@Component({
  components: {
    NeonButton,
  },
})
export default class NeonPre extends Vue {
  $refs!: {
    wrapper: HTMLDivElement;
  };

  private clipboard = NeonClipboardService;

  private copyText() {
    const text = this.$refs.wrapper.firstChild && this.$refs.wrapper.firstChild.textContent;
    if (text) {
      this.clipboard.copyTo(text).then(() => {
        NeonAlertService.info('Copied text');
      });
    }
  }
}
