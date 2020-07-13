<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Installation</h1>
      </neon-card-header>
      <neon-card-body>
        <p>Install the package with one of the following commands:</p>
        <pre>npm install @aotearoan/neon</pre>
        <pre>yarn add @aotearoan/neon</pre>
      </neon-card-body>
    </neon-card>
    <neon-card>
      <neon-card-header>
        <h1>Usage</h1>
      </neon-card-header>
      <neon-card-body>
        <h2>Javascript/Typescript</h2>
        <p>Import components and supporting classes like so:</p>
        <pre>
import { Component, Vue } from 'vue-property-decorator';
import { NeonLogo } from '@aotearoan/neon';

@Component({
  components: {
    NeonLogo,
  },
})
export default class App extends Vue {}
</pre
        >
        <h2>SASS</h2>
        <p>First select a theme:</p>
        <ul>
          <li>classic</li>
        </ul>
        <p>
          To use a theme without any customization simply import the basic theme file, e.g. to import the classic theme:
        </p>
        <pre>
@import '~@aotearoan/neon/themes/classic';
</pre
        >
        <p>If, however you would like to override/customize the theme then you need to include the following:</p>
        <pre>
.app {
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
}
</pre
        >
        <p>
          Finally, the theme and mode (light/dark) need to be set on the document, e.g. to set the
          <em>classic</em> theme and <em>dark</em> mode:
        </p>
        <pre>&lt;html class="app neon neon-theme--classic neon-mode--dark"&gt;</pre>
        <p>
          For more information on dynamically changing the mode see
          <neon-link href="/design/dark-mode">Dark mode</neon-link>
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./GettingStarted.ts"></script>
