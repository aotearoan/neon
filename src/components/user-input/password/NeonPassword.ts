import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NeonPassword extends Vue {
  private show = false;

  get sanitizedListeners(): Record<string, Function | Function[]> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { iconClicked, ...sanitized } = this.$listeners;
    return sanitized;
  }

  private iconClicked() {
    this.show = !this.show;
    this.$emit('icon-clicked');
  }
}
