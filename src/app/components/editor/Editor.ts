import { Component, Prop, Vue } from 'vue-property-decorator';
import { PrismEditor } from 'vue-prism-editor';
// @ts-ignore
import Prism from 'prismjs';
import 'vue-prism-editor/dist/prismeditor.min.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
// @ts-ignore
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

import { NeonClipboardService } from '../../../common/utils/NeonClipboardService';
import { NeonAlertService } from '../../../components/feedback/alert/NeonAlert';
import NeonButton from '../../../components/user-input/button/NeonButton.vue';

@Component({
  components: {
    NeonButton,
    PrismEditor,
  },
})
export default class Editor extends Vue {
  private clipboard = NeonClipboardService;

  @Prop({ required: true })
  public value!: string;

  @Prop({ default: false })
  public readOnly!: boolean;

  @Prop({ default: 'html' })
  public language!: string;

  public mounted() {
    Prism.plugins.NormalizeWhitespace = new Normalizer({
      'remove-trailing': true,
      'left-trim': true,
      'right-trim': true,
    });
  }

  private highlighter(code: string) {
    return Prism.highlight(code, Prism.languages[this.language], this.language);
  }

  private onEdit(newValue: string) {
    this.$emit('input', newValue);
  }

  private copyText() {
    this.clipboard.copyTo(this.value).then(() => {
      NeonAlertService.info('Copied text');
    });
  }
}
