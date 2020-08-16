import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonClipboardService } from '../../../common/utils/NeonClipboardService';
import NeonButton from '../../../components/user-input/button/NeonButton.vue';
import { NeonAlertService } from '../../../components/feedback/alert/NeonAlert';
// @ts-ignore
import { component as VueCodeHighlight } from 'vue-code-highlight';
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-bash';
import 'prism-es6/components/prism-json';
import 'prism-es6/components/prism-scss';
import 'prism-es6/components/prism-typescript';
import 'prism-es6/themes/prism-tomorrow.css';

@Component({
  components: {
    NeonButton,
    VueCodeHighlight,
  },
})
export default class AppPre extends Vue {
  $refs!: {
    wrapper: HTMLDivElement;
  };

  @Prop({ required: true })
  private language!: string;

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
