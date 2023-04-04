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
          Neon does not support i18n implicitly but rather adopts the approach of providing default English strings as
          component parameters where text is necessary. This means Neon works out of the box with English and can easily
          be integrated easily with i18n libraries like
          <neon-link href="https://kazupon.github.io/vue-i18n/" target="_blank">vue-i18n</neon-link>
          .
        </p>
        <p>It is the responsibility of the application to manage language strings and provide those to Neon.</p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./I18n.ts"></script>
