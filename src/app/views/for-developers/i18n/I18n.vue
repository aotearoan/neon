<template>
  <div>
    <neon-card>
      <neon-card-header>
        <h1 class="neon-h3">i18n Internationalization</h1>
      </neon-card-header>
    </neon-card>
    <neon-card>
      <neon-card-body>
        <neon-anchor id="text-strings" />
        <h1 class="neon-h3">Text Strings</h1>
        <p>
          Neon does not support i18n implicitly but rather adopts the approach of providing default English strings as
          component parameters where text is necessary. This means Neon works out of the box with English and can easily
          be integrated with i18n libraries like
          <neon-link href="https://kazupon.github.io/vue-i18n/" target="_blank">vue-i18n</neon-link>
          .
        </p>
        <p>It is the responsibility of the application to manage language strings and provide those to Neon.</p>
      </neon-card-body>
      <neon-card-body>
        <neon-anchor id="dates-&-numbers" />
        <h1 class="neon-h3">Dates & Numbers</h1>
        <p>
          Neon uses the browser locale as a default for representing dates & numbers in a format the user expects. See
          <neon-link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"
            target="_blank">Intl.NumberFormat
          </neon-link>
          for more on how numbers are formatted.
        </p>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./I18n.ts"></script>
