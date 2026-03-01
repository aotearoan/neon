<template>
  <div class="neon-banner__wrapper">
    <neon-note v-for="message in messages" :key="message.id" :color="message.level" :icon="false" class="neon-banner">
      <span class="neon-banner__message" v-html="message.message" />
      <neon-button
        :label="message.action.label"
        button-style="outline"
        class="neon-banner__action"
        color="high-contrast"
        size="s"
        @click="onAction()"
      />
    </neon-note>
  </div>
</template>

<script lang="ts" src="./NeonBanner.ts" />
