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
        :transparent="true"
        aria-label="Copy"
        button-style="text"
        class="editor__copy"
        color="low-contrast"
        icon="copy"
        size="s"
        @click="copyText"
      />
      <neon-button
        v-if="ghLink"
        :href="ghLink"
        :transparent="true"
        aria-label="View on GitHub"
        button-style="text"
        class="editor__copy"
        color="low-contrast"
        icon="github"
        size="s"
        target="_blank"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Editor.ts"></script>
