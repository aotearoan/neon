import { defineComponent, ref } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'GettingStarted',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLink,
    Editor,
  },
  setup() {
    const darkModeExample = ref('<html class="app neon neon-theme--classic neon-mode--dark">');

    const importComponents = ref(`import { Component, Vue } from 'vue-property-decorator';
import { NeonLogo, registerComponents } from '@aotearoan/neon';

// NOTE: Optional. This automatically registers all components, alternatively, use Vue.component to register components individually.
registerComponents();

@Component({ components: { NeonLogo } })
export default class App extends Vue {}`);

    const allTheSass = ref(`.app {
  &.neon-theme--classic {
    // OPTIONAL: define the list of Neon components used by the application and only the necessary SASS for these
    // components will be imported, otherwise SASS for all components will be imported for the theme.
    $neon-components: [NeonGrid, NeonGridArea, NeonPage, NeonSideNav];

    // override colors, palettes and other basic variables here BEFORE importing the theme, e.g. $neon-border-radius: 4px
    @use '~@aotearoan/neon/themes/classic/theme';

    // include custom app SASS here (you can use neon's defined variables, mixins and functions)

    &.neon-mode--dark {
      // override dark mode specific variables here, e.g. $neon-border-color: #bada55
      @use '~@aotearoan/neon/themes/classic/dark';

      // include custom app dark mode SASS here (you can use neon's defined variables, mixins and functions)
    }

    &.neon-mode--light {
      // override light mode specific variables here, e.g. $neon-border-color: #bada55
      @use '~@aotearoan/neon/themes/classic/light';

      // include custom app light mode SASS here (you can use neon's defined variables, mixins and functions)
    }
  }
}`);

    return {
      darkModeExample,
      importComponents,
      allTheSass,
    };
  },
});
