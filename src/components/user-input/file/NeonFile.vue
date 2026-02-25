<template>
  <div
    :aria-disabled="disabled"
    :class="[
      `neon-file--${color}`,
      `neon-file--${size}`,
      { 'neon-file--disabled': disabled, 'neon-file--single': !multiple, 'neon-file--direct-upload': directUpload },
    ]"
    class="neon-file"
  >
    <neon-list
      v-if="!directUpload"
      :color="color"
      :disabled="disabled"
      :modelValue="fileList"
      :size="size"
      @close="remove"
    />
    <neon-input
      :id="id"
      ref="fileInput"
      v-model="fileInputModel"
      :accept="accept"
      :disabled="disabled"
      :multiple="multiple"
      :tabindex="-1"
      class="neon-file__input"
      type="file"
      @input="onInput"
    />
    <div class="neon-button-group neon-file__actions">
      <neon-button
        v-if="multiple && !directUpload"
        :disabled="disabled || files.length === 0"
        :size="size"
        button-style="text"
        color="low-contrast"
        label="Clear all"
        @click="clearAll()"
      />
      <neon-button
        :aria-controls="id ? id : undefined"
        :color="color"
        :disabled="disabled"
        :icon="icon"
        :label="label"
        :size="size"
        :state="state"
        @click="openFileDialog"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./NeonFile.ts" />
