import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonState } from '../../../common/enums/NeonState';
import { TranslateResult } from 'vue-i18n';

@Component({})
export default class NeonFile extends Vue {
  $refs!: {
    fileInput: HTMLInputElement;
  };

  private files: File[] = [];

  @Prop({ default: false })
  public disabled!: boolean;

  @Prop({ default: false })
  public directUpload!: boolean;

  @Prop({ default: false })
  public multiple!: boolean;

  @Prop()
  public accept?: string;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize.Small | NeonSize.Medium | NeonSize.Large;

  @Prop({ default: NeonState.Ready })
  public state!: NeonState;

  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  @Prop()
  public label?: TranslateResult;

  @Prop()
  public icon?: string;

  private remove(filename: string) {
    if (!this.disabled) {
      this.files = this.files.filter((f) => f.name !== filename);
      this.emit();
    }
  }

  private clearAll() {
    if (!this.disabled) {
      this.files = [];
      this.emit();
    }
  }

  private openFileDialog() {
    this.$refs.fileInput.click();
  }

  private onInput(event: Event) {
    if (event !== null && event.target) {
      const files = (event.target as HTMLInputElement).files;
      const newFiles = files ? Array.from(files) : [];
      this.files = [...this.files, ...newFiles];
      this.emit();
    }
  }

  private emit() {
    this.$emit('input', this.files);
    if (this.directUpload) {
      this.files = [];
    }
  }
}
