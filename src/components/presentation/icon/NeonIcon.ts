import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonIconRegistry } from '../../../common/utils/NeonIconRegistry';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * <p>A component for rendering SVG images. These images are generally, but not limited to, <em>icons</em>. This
 * component can render any SVG of any size. Size is not restricted in the NeonIcon component but rather in the
 * components using the icons. Generally, when talking about icons, this component is only used to build other
 * components. But you may also find it useful for rendering SVG images, e.g. illustrations.</p>
 *
 * <p>There is an icon registry where strings containing SVGs can be registered with a name and that name can be used
 * with the NeonIcon component to render the image. Use the classes <em>neon-svg-fill</em> and <em>neon-svg--stroke</em>
 * in the SVG elements to automatically apply the functional colors.</p>
 *
 * <p>This provides the advantage of only registering the icons you actually need, dynamically switching colors in
 * Typescript/CSS without using a large icon font and not having to duplicate icon images to support multiple
 * color variations (including light and dark modes).</p>
 *
 * For more detailed information please see <a href="/presentation/icon">Icons</a>.
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

  /**
   * Set the icon color to the inverse text color
   */
  @Prop({ default: false })
  public inverse!: boolean;

  /**
   * Apply a disabled style to the icon
   */
  @Prop({ default: false })
  public disabled!: boolean;

  get icon() {
    const _icon = NeonIconRegistry.getIcon(this.name);
    if (!_icon) {
      console.error(`icon ${this.name} doesn't exist! Register icon with NeonIconRegistry.addIcon(name, svg);`);
    }
    return _icon;
  }
}
