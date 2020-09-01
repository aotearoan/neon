import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader } from '../../../../components';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    Editor,
  },
})
export default class GettingStarted extends Vue {
  private darkModeExample = `<html class="app neon neon-theme--classic neon-mode--dark">`;

  private importComponents = `import { Component, Vue } from 'vue-property-decorator';
import { NeonLogo } from '@aotearoan/neon';

@Component({ components: { NeonLogo } })
export default class App extends Vue {}`;

  private allTheSass = `.app {
  &.neon-theme--classic {
    // override colors, palettes and other basic variables here BEFORE importing the theme, e.g. $color-primary: #bada55
    @import '~@aotearoan/neon/themes/classic/theme';

    // include custom app SASS here (you can use neon's defined variables, mixins and functions)

    &.neon-mode--dark {
      // override dark mode specific variables here, e.g. $border-color: #bada55
      @import '~@aotearoan/neon/themes/classic/dark';

      // include custom app dark mode SASS here (you can use neon's defined variables, mixins and functions)
    }

    &.neon-mode--light {
      // override light mode specific variables here, e.g. $border-color: #bada55
      @import '~@aotearoan/neon/themes/classic/light';

      // include custom app light mode SASS here (you can use neon's defined variables, mixins and functions)
    }
  }
}`;
}
