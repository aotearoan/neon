<template>
  <div class="app-pre" ref="wrapper">
    <vue-code-highlight :language="language" class="app-pre__container">
      <!-- @slot pass a pre element here and it will gain formatting and clipboard copy support -->
      <slot></slot>
    </vue-code-highlight>
    <neon-button
      v-if="clipboard.supportClipboard"
      icon="copy"
      class="app-pre__copy"
      button-style="text"
      color="neutral"
      size="l"
      title="copy"
      :outline="false"
      @click="copyText"
    />
  </div>
</template>

<script lang="ts" src="./AppPre.ts"></script>
