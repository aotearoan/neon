<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1>Getting Started</h1>
      </neon-card-header>
      <neon-card-body>
        <neon-anchor id="installation" />
        <h2>Installation</h2>
        <p>Install with NPM:</p>
        <app-pre language="bash">{{ `npm install @aotearoan/neon` }}</app-pre>
        <p>or yarn:</p>
        <app-pre language="bash">{{ `yarn add @aotearoan/neon` }}</app-pre>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="typescript" />
        <h2>Javascript/Typescript</h2>
        <p>Import components and supporting classes like so:</p>
        <app-pre language="typescript">{{
          `
            import { Component, Vue } from 'vue-property-decorator';\n
            import { NeonLogo } from '@aotearoan/neon';\n
\n
            @Component({ components: { NeonLogo } })\n
            export default class App extends Vue {}`
        }}</app-pre>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="sass" />
        <h2>SASS</h2>
        <p>First select a theme:</p>
        <ul>
          <li>classic</li>
        </ul>
        <p>
          To use a theme without any customization simply import the basic theme file, e.g. to import the
          <em>classic</em> theme:
        </p>
        <app-pre language="scss">{{ `@import '~@aotearoan/neon/themes/classic';` }}</app-pre>
        <p>If, however you would like to override/customize the theme then you need to include the following:</p>
        <app-pre language="scss">{{
          `
.app {\n
\t&.neon-theme--classic {\n
\t\t// override colors, palettes and other basic variables here BEFORE importing the theme, e.g. $color-primary: #bada55\n
\t\t@import '~@aotearoan/neon/themes/classic/theme';\n
\n
\t\t// include custom app SASS here (you can use neon's defined variables, mixins and functions)\n
\n
\t\t&.neon-mode--dark {\n
\t\t\t// override dark mode specific variables here, e.g. $border-color: #bada55\n
\t\t\t@import '~@aotearoan/neon/themes/classic/dark';\n
\n
\t\t\t// include custom app dark mode SASS here (you can use neon's defined variables, mixins and functions)\n
\t\t}\n
\n
\t\t&.neon-mode--light {\n
\t\t\t// override light mode specific variables here, e.g. $border-color: #bada55\n
\t\t\t@import '~@aotearoan/neon/themes/classic/light';\n
\n
\t\t\t// include custom app light mode SASS here (you can use neon's defined variables, mixins and functions)\n
\t\t}\n
\t}\n
}\n
`
        }}</app-pre>
        <p>
          Finally, the theme and mode (light/dark) need to be set on the document, e.g. to set the
          <em>classic</em> theme and <em>dark</em> mode:
        </p>
        <app-pre language="html">{{ `&lt;html class="app neon neon-theme--classic neon-mode--dark"&gt;` }}</app-pre>
        <p>
          For more information on dynamically changing the mode see
          <neon-link href="/design/dark-mode">Dark mode</neon-link>.
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./GettingStarted.ts"></script>
