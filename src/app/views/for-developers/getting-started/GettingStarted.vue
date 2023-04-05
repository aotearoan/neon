<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1 class="neon-h3">Getting Started</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="installation" />
        <h2 class="neon-h4">Installation</h2>
        <p>Install with NPM:</p>
        <editor language="bash" modelValue="npm install @aotearoan/neon" />
        <p>or yarn:</p>
        <editor language="bash" modelValue="yarn add @aotearoan/neon" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="typescript" />
        <h2 class="neon-h4">Javascript/Typescript</h2>
        <p>Import components and supporting classes like so:</p>
        <editor v-model="importComponents" language="typescript" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="sass" />
        <h2 class="neon-h4">SASS</h2>
        <p>Import the theme:</p>
        <editor language="scss" modelValue="@use '@aotearoan/neon/theme';" />
        <p>
          Alternatively the theme can be imported with a list of used components to minimise the final package size:
        </p>
        <editor v-model="allTheSass" language="scss" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="html" />
        <h2 class="neon-h4">HTML</h2>
        <p>
          Add the necessary <em>app</em> & <em>neon</em> styles to the HTML element as well as the light/dark mode, e.g.
          to set dark mode by default:
        </p>
        <editor v-model="darkModeExample" language="html" />
        <p>
          For more information on dynamically changing the mode see
          <neon-link href="/design/theming#dark-mode">Dark mode</neon-link>
          .
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./GettingStarted.ts"></script>
