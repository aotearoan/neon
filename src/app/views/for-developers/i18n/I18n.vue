<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1 class="neon-h3">i18n Internationalization</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <p>
          Neon uses the
          <neon-link href="https://kazupon.github.io/vue-i18n/" target="_blank" :external-indicator="true"
            >vue-i18n</neon-link
          >
          plugin to provide internationalization support. Anywhere a visible string is displayed the
          <em>TranslateResult</em> type is used so the application can provide a vue-i18n TranslateResult or a plain
          string.
        </p>
        <p>It is the responsibility of the application to manage language strings and provide those to Neon.</p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./I18n.ts"></script>
