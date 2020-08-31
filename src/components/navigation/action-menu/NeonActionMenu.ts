import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonActionMenuModel } from '../../../common/models/NeonActionMenuModel';
import NeonLink from '../../navigation/link/NeonLink.vue';

/**
 * An action menu is designed for the NeonSideNav component and is designed to behave like tabs where selecting a different item switches the contents in the main page.
 */
@Component({
  components: {
    NeonLink,
  },
})
export default class NeonActionMenu extends Vue {
  /**
   * The list of action items to display in the menu.
   */
  @Prop({ required: true })
  model!: NeonActionMenuModel[];

  /**
   * The key of the selected model action item.
   */
  @Prop({ required: true })
  value!: string;

  private onClick(key: string) {
    if (this.value !== key) {
      /**
       * emitted when the user clicks on a new action menu item.
       * @type {string} the key of the newly selected action menu item.
       */
      this.$emit('input', key);
    }
  }
}
