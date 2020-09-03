<template>
  <neon-card>
    <neon-card-header>
      <h1 class="neon-h3">Theming</h1>
    </neon-card-header>
    <neon-card-body>
      <neon-anchor id="themes" />
      <h2 class="neon-h4">Themes</h2>
      <p>
        In future Neon will support multiple themes to suit a wider variety of tastes and styles. Each theme is
        available in both light and dark modes so you have the choice of using light mode, dark mode or dynamically
        switching between the two.
      </p>
      <neon-note color="error">
        <span>
          <strong>Note: </strong> For performance reasons, dynamically switching themes is not recommended. Include a
          single theme will keep CSS includes to a reasonable size.</span
        >
      </neon-note>
      <p>
        See the <neon-link href="/for-developers/getting-started#sass">Getting started</neon-link> page for more info
        about how to use themes.
      </p>
    </neon-card-body>
    <neon-card-body>
      <neon-anchor id="dark-mode" />
      <h2 class="neon-h4">Dark mode</h2>
      <p>
        Neon supports both light and dark modes for each theme. These are supported by changing the mode class attached
        to the body of the page. The classes are <em>neon-mode--light</em> and
        <em>neon-mode--dark</em>
      </p>
      <p>Use <a href="/utils/NeonModeUtils">NeonModeUtils</a> to listen to native color scheme switching.</p>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./Theming.ts"></script>
