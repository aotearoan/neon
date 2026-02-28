import { computed, defineComponent, useAttrs } from 'vue';
import { NeonIconRegistry } from '@/common/utils/NeonIconRegistry';
import type { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 * <p>A component for rendering SVG images. These images are generally, but not limited to, <em>icons</em>. This
 * component can render any SVG of any size. Size is not restricted in the NeonIcon component but rather in the
 * components using the icons. Generally, when talking about icons, this component is only used to build other
 * components. But you may also find it useful for rendering SVG images, e.g. illustrations.</p>
 *
 * <p>There is an icon registry where strings containing SVGs can be registered with a name and that name can be used
 * with the NeonIcon component to render the image. Use the classes <em>neon-svg--fill</em> and <em>neon-svg--stroke</em>
 * in the SVG elements to automatically apply the functional colors.</p>
 *
 * <p>This provides the advantage of only registering the icons you actually need, dynamically switching colors in
 * Typescript/CSS without using a large icon font and not having to duplicate icon images to support multiple
 * color variations (including light and dark modes).</p>
 *
 * For more detailed information please see <a href="/presentation/icon">Icons</a>.
 */
export default defineComponent({
  name: 'NeonIcon',
  props: {
    /**
     * The name of an icon registered in the icon registry.
     */
    name: { type: String, required: true },
    /**
     * An id to inject into the icon. This is necessary for rendering clipPaths correctly if the same icon is used
     * multiple times on a page as the ids need to be unique.
     */
    id: { type: String, default: null },
    /**
     * The color to render the icon. By default, it will be the current text color (light text in dark mode or dark text in light mode).
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Set the icon color to the inverse text color
     */
    inverse: { type: Boolean, default: false },
    /**
     * Apply a disabled style to the icon
     */
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    const attrs = useAttrs();

    const icon = computed(() => {
      let _icon = NeonIconRegistry.getIcon(props.name);

      if (!_icon) {
        console.error(`icon ${props.name} doesn't exist! Register icon with NeonIconRegistry.addIcon(name, svg);`);
      }

      if (props.id) {
        _icon = _icon.replace(/url\(#/g, `url(#${props.id}`);
        _icon = _icon.replace(/id="/g, `id="${props.id}`);
        _icon = _icon.replace('<svg ', `<svg id="${props.id}" `);
      }

      return _icon;
    });

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...sanitized } = attrs;
      return sanitized;
    });

    return {
      sanitizedAttributes,
      icon,
    };
  },
});
