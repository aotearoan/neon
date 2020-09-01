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
        <editor :read-only="true" language="bash" value="npm install @aotearoan/neon" />
        <p>or yarn:</p>
        <editor :read-only="true" language="bash" value="yarn add @aotearoan/neon" />
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="typescript" />
        <h2>Javascript/Typescript</h2>
        <p>Import components and supporting classes like so:</p>
        <editor :read-only="true" language="typescript" :value="importComponents" />
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
        <editor :read-only="true" language="scss" value="@import '~@aotearoan/neon/themes/classic';" />
        <p>If, however you would like to override/customize the theme then you need to include the following:</p>
        <editor :read-only="true" language="scss" :value="allTheSass" />
        <p>
          Finally, the theme and mode (light/dark) need to be set on the document, e.g. to set the
          <em>classic</em> theme and <em>dark</em> mode:
        </p>
        <editor :read-only="true" language="html" :value="darkModeExample" />
        <p>
          For more information on dynamically changing the mode see
          <neon-link href="/design/theming#dark-mode">Dark mode</neon-link>.
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./GettingStarted.ts"></script>
