<template>
  <div class="editor__wrapper">
    <div class="editor__container">
      <prism-editor :value="value" @input="onEdit" :highlight="highlighter" class="editor" :readonly="readOnly" />
    </div>
    <div class="editor__actions">
      <neon-button
        v-if="clipboard.supportClipboard"
        icon="copy"
        class="editor__copy"
        button-style="text"
        color="neutral"
        size="s"
        title="Copy"
        :outline="false"
        @click="copyText"
      />
      <neon-icon v-if="readOnly" name="lock" :disabled="true" class="editor__read-only" title="Read only" />
    </div>
  </div>
</template>

<script lang="ts" src="./Editor.ts"></script>
