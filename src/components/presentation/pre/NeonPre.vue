<template>
  <div class="neon-pre" ref="wrapper">
    <!-- @slot pass a pre element here and it will gain formatting and clipboard copy support -->
    <slot></slot>
    <neon-button
      v-if="clipboard.supportClipboard"
      icon="copy"
      class="neon-pre__copy"
      button-style="text"
      color="neutral"
      size="l"
      title="copy"
      :outline="false"
      @click="copyText"
    />
  </div>
</template>

<script lang="ts" src="./NeonPre.ts"></script>
