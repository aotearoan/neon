<template>
  <div
    class="neon-file"
    :class="[
      `neon-file--${color}`,
      `neon-file--${size}`,
      { 'neon-file--disabled': disabled, 'neon-file--single': !multiple, 'neon-file--direct-upload': directUpload },
    ]"
    :aria-disabled="disabled"
  >
    <neon-list
      v-if="!directUpload"
      :value="fileList"
      @close="remove"
      :disabled="disabled"
      :color="color"
      :size="size"
    />
    <neon-input
      type="file"
      :multiple="multiple"
      :accept="accept"
      tabindex="-1"
      :disabled="disabled"
      class="neon-file__input"
      @change="onInput"
      ref="fileInput"
      :id="id"
    />
    <div class="neon-button-group neon-file__actions">
      <neon-button
        v-if="multiple && !directUpload"
        :disabled="disabled || files.length === 0"
        :size="size"
        button-style="text"
        label="Clear all"
        @click="clearAll()"
      />
      <neon-button
        :disabled="disabled"
        :color="color"
        :state="state"
        :size="size"
        :label="label"
        :icon="icon"
        :aria-controls="id ? id : undefined"
        @click="openFileDialog"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./NeonFile.ts" />
