<template>
  <div
    class="neon-file"
    :class="[
      `neon-file--${color}`,
      `neon-file--${size}`,
      { 'neon-file--disabled': disabled, 'neon-file--single': !multiple, 'neon-file--direct-upload': directUpload },
    ]"
  >
    <ul class="no-style neon-file__list" v-if="!directUpload">
      <li
        v-for="file in files"
        :key="file.name"
        @click="remove(file.name)"
        class="neon-file__file"
        :class="{ 'neon--disabled': disabled }"
      >
        <span>{{ file.name }}</span>
        <neon-icon name="times" :disabled="disabled" />
      </li>
    </ul>
    <neon-input
      type="file"
      :multiple="multiple"
      :accept="accept"
      tabindex="-1"
      :disabled="disabled"
      class="neon-file__input"
      @change="onInput"
      ref="fileInput"
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
        @click="openFileDialog"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./NeonFile.ts" />
