<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1 class="neon-h3">Theming</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="themes" />
        <h2 class="neon-h4">Themes</h2>
        <p>
          Neon supports theming via CSS variables. Override any of the variables defined in
          <em>src/sass/variables.scss</em> & <em>src/sass/colors.scss</em> to achieve style changes for individual
          components or, more broadly, to change the application style.
        </p>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="dark-mode" />
        <h2 class="neon-h4">Dark mode</h2>
        <p>
          Neon supports both light and dark modes for each theme. These are supported by changing the mode class
          attached to the body of the page. The classes are <em>neon-mode--light</em> and
          <em>neon-mode--dark</em>
        </p>
        <p>
          Use
          <neon-link href="/utils/NeonModeUtils">NeonModeUtils</neon-link>
          to listen to native color scheme switching.
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./Theming.ts"></script>
