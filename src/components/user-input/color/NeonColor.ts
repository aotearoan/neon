import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonInput from '../input/NeonInput.vue';

@Component({
  components: {
    NeonInput,
  },
})
export class NeonColor extends Vue {
  /**
   * The Hexadecimal color code.
   */
  @Prop({ required: true })
  private value!: string;

  /**
   * Disable color picker
   */
  @Prop({ default: false })
  private disabled!: boolean;

  /**
   * The size of the color picker, one of NeonSize.Small | NeonSize.Medium | NeonSize.Large.
   */
  @Prop({ default: NeonSize.Medium })
  private size!: NeonSize;

  /**
   * Color of the input
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  private color!: NeonFunctionalColor;

  /**
   * This is the placeholder for the text input when no value is provided.
   */
  @Prop({ required: false })
  private placeholder?: string;

  private changeValue(event: Event) {
    /**
     * event triggered when the value changes.
     *
     * @type {string}
     */
    this.$emit('input', event);
  }
}

export default NeonColor;
