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
          <li>default</li>
        </ul>
        <p>
          There are two imports necessary to use a theme, the variables and the theme itself. These are split into two
          files to allow developers to override the variables for customization.
        </p>
        <p>Here is how to import the <em>default</em> theme:</p>
        <pre>
@import '~@aotearoan/neon/default-variables';
@import 'src/sass/overrides';
@import '~@aotearoan/neon/default-theme';
</pre
        >
        <p>
          Finally, the theme and mode (light/dark) need to be set on the document, e.g. to set the
          <em>default</em> theme and <em>dark</em> mode:
        </p>
        <pre>&lt;html class="app neon neon-theme--default neon-mode--dark"&gt;</pre>
        <p>
          For more information on dynamically changing the mode see
          <neon-link :href="`${baseUrl}design/dark-mode`">Dark mode</neon-link>
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./GettingStarted.ts"></script>
