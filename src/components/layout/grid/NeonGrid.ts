import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import type { NeonGridModel } from '@/common/models/NeonGridModel';
import { NeonResponsiveUtils } from '@/common/utils/NeonResponsiveUtils';

const styleIdPrefix = 'neon-grid-styles-';

/**
 * <p>A CSS grid component for top level layout within a page. This component provides functionality to dynamically
 * generate the grid CSS and inject it into the page as well as defining the grid for different responsive breakpoints.
 * The defined grid can be updated programmatically which is useful for adding/removing items from the grid.</p>
 *
 * <p>NeonGrid provides a slot for a set of NeonGridArea components, defining the contents for the various grid areas on
 * the page.</p>
 */
export default defineComponent({
  name: 'NeonGrid',
  props: {
    /**
     * The grid layouts
     */
    layouts: { type: Array as () => Array<NeonGridModel>, required: true },
    /**
     * Id of the grid, should be unique on the page
     */
    id: { type: String, required: true },
  },
  setup(props) {
    const allGridAreas = ref<Set<string>>(new Set<string>(props.layouts.map((layout) => layout.grid.flat()).flat()));

    const generateGridCSS = (grid: string[][]) => {
      // add template
      let gridStyles = `  .neon-grid {
    grid-template-areas: `;

      gridStyles = gridStyles + grid.map((row) => `"${row.join(' ')}"`).join('\n') + ';';
      gridStyles = gridStyles + '\n  }\n';

      const processed: string[] = [];

      // add areas
      gridStyles =
        gridStyles +
        grid
          .map((row) => {
            return row
              .map((column) => {
                if (processed.indexOf(column) >= 0) {
                  return '';
                }

                processed.push(column);

                return `
  .${column} {
    grid-area: ${column};
  }`;
              })
              .join('\n');
          })
          .join('');

      const gridAreas = new Set<string>(grid.flat().flat());
      const toHide = Array.from(allGridAreas.value).filter((area) => !gridAreas.has(area));
      gridStyles = gridStyles + toHide.map((area) => `\n\n  .${area} { display: none!important; }`);
      return gridStyles;
    };

    const generateStyle = (layout: NeonGridModel) => {
      const grid = layout.grid;
      const breakpoint = NeonResponsiveUtils.breakpoints[layout.breakpoint];
      const breakpointQuery = breakpoint.length > 0 ? ` and ${breakpoint}` : '';
      return `@media screen${breakpointQuery} {\n` + generateGridCSS(grid) + '\n}';
    };

    const generateStyles = () => {
      return props.layouts.map((layout) => generateStyle(layout)).join('\n');
    };

    const applyStyle = (styles: string) => {
      const id = styleIdPrefix + props.id;
      let element: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;
      if (element === null) {
        element = document.createElement('style');
        element.id = id;
        document.head.appendChild(element);
      }
      element.innerHTML = styles;
    };

    const init = () => {
      const styles = generateStyles();
      applyStyle(styles);
    };

    const destroy = () => {
      const id = styleIdPrefix + props.id;
      const element: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;

      if (element != null && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };

    onMounted(() => init());
    onUnmounted(() => destroy());

    watch(
      () => props.layouts,
      () => {
        destroy();
        init();
      },
      { deep: true, immediate: true },
    );
  },
});
