<template>
  <div class="editor__wrapper">
    <div class="editor__container">
      <prism-editor
        :highlight="highlighter"
        :modelValue="modelValue"
        :readonly="true"
        class="editor"
        @update:modelValue="onEdit"
      />
    </div>
    <div class="editor__actions">
      <neon-button
        v-if="clipboard.supportClipboard"
        aria-label="Copy"
        button-style="text"
        class="editor__copy"
        color="neutral"
        icon="copy"
        size="s"
        @click="copyText"
      />
      <neon-button
        v-if="ghLink"
        :href="ghLink"
        aria-label="View on GitHub"
        button-style="text"
        class="editor__copy"
        color="neutral"
        icon="github"
        size="s"
        target="_blank"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Editor.ts"></script>
