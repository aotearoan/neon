import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonIconRegistry } from '../../../common/utils/NeonIconRegistry';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * A component for rendering SVG images. These images are generally, but not limited to, <em>icons</em>. This component can render any SVG of any size. Size is not restricted in the NeonIcon component but rather in the components using the icons. Generally, when talking about icons, this component is only used to build other components. But you may also find it useful for rendering SVG images, e.g. illustrations.
 *
 * There is an icon registry where strings containing SVGs can be registered with a name and that name can but used with the NeonIcon component to render the image. If the paths in the SVG are given the attribute <strong>fill="currentColor"</strong> they will automatically take on the color provided to NeonIcon.
 *
 * This provides the advantage of only registering the icons you actually need, dynamically switching colors in Typescript/CSS without using a large icon font and not having to duplicate icon images to support multiple color variations, including light and dark modes.
 *
 * For more detailed information please see <a href="/design/icons">Icons</a>.
 */
@Component
export default class NeonIcon extends Vue {
  /**
   * The name of an icon registered in the icon registry.
   */
  @Prop({ required: true })
  name!: string;

  /**
   * The color to render the icon. By default it will be the current text color (light text in dark mode or dark text in light mode).
   */
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
