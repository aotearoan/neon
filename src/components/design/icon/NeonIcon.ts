import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonIconRegistry } from './NeonIconRegistry';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

@Component
export default class NeonIcon extends Vue {
  @Prop({ required: true })
  name!: string;

  @Prop()
  public color?: NeonFunctionalColor;

  get icon() {
    const icon = NeonIconRegistry.getIcon(this.name);
    if (!icon) {
      console.error(`icon ${this.name} doesn't exist! Register icon with NeonIconRegistry.addIcon(name, svg);`);
    }
    return icon;
  }
}
