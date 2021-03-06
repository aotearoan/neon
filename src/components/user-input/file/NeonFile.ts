import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonState } from '../../../common/enums/NeonState';
import { TranslateResult } from 'vue-i18n';
import NeonButton from '../button/NeonButton.vue';
import NeonInput from '../input/NeonInput.vue';
import NeonList from '../list/NeonList.vue';

/**
 * A file upload component. This is a wrapper around an HTML file input. It can display multiple files as well as
 * providing a convenient UI for removing/clearing files from the list.
 */
@Component({
  components: {
    NeonButton,
    NeonInput,
    NeonList,
  },
})
export default class NeonFile extends Vue {
  $refs!: {
    fileInput: HTMLInputElement;
  };

  files: File[] = [];

  /**
   * The disabled state of the component
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * Files are uploaded directly once added, there is no waiting to click a confirmation button
   */
  @Prop({ default: false })
  public directUpload!: boolean;

  /**
   * Support multiple files.
   */
  @Prop({ default: false })
  public multiple!: boolean;

  /**
   * HTML file input accept property for filtering the files the user is allowed to select. THis is a mime type,
   * e.g. 'application/pdf'.
   */
  @Prop()
  public accept?: string;

  /**
   * Provide an id to attach to the internal HTML input[file] (also adds an aria-controls link between the button and
   * the hidden input).
   */
  @Prop()
  public id?: string;

  /**
   * The file component size
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The state of the input, used to indicate loading, success and error states
   */
  @Prop({ default: NeonState.Ready })
  public state!: NeonState;

  /**
   * The file component color
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The label of the file component button
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * The icon of the file component button
   */
  @Prop()
  public icon?: string;

  get fileList() {
    return this.files.map((file) => ({ key: file.name, label: file.name }));
  }

  remove(filename: string) {
    if (!this.disabled) {
      this.files = this.files.filter((f) => f.name !== filename);
      this.emit();
    }
  }

  clearAll() {
    if (!this.disabled) {
      this.files = [];
      this.emit();
    }
  }

  openFileDialog() {
    this.$refs.fileInput.click();
  }

  onInput(event: Event) {
    if (event?.target) {
      const files = (event.target as HTMLInputElement).files;
      const newFiles = files ? Array.from(files).filter((file) => !this.files.find((f) => f.name === file.name)) : [];
      this.files = this.multiple ? [...this.files, ...newFiles] : newFiles;
      this.emit();
    }
  }

  emit() {
    /**
     * Emitted when files are selected and uploaded
     * @type {File | File[]} either a single File (multiple = false) or a list of File objects (multiple = true)
     */
    this.$emit('input', this.multiple ? this.files : this.files[0]);
    if (this.directUpload) {
      this.files = [];
    }
  }
}
