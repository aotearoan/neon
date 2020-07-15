<template>
  <neon-card>
    <neon-card-header>
      <h1>Dark mode</h1>
    </neon-card-header>
    <neon-card-body>
      <p>Use <strong>NeonModeUtils</strong> to listen to native color scheme switching. The API is:</p>
      <ul>
        <li>
          <strong class="neon-monospaced">init(defaultMode?: NeonMode)</strong> - initialise the mode from the users
          preferences. Optionally set the default mode in the case there is no native support for color schemes. The
          initial value is <strong>NeonMode.Dark</strong>.
        </li>
        <li>
          <strong class="neon-monospaced">addListener(key: string, callback: (mode: NeonMode) => void)</strong> - listen
          to color scheme changes.
        </li>
        <li>
          <strong class="neon-monospaced">removeListener(key: string)</strong> - remove listener with specified key.
        </li>
      </ul>
    </neon-card-body>
  </neon-card>
</template>

<script lang="ts" src="./DarkMode.ts"></script>
