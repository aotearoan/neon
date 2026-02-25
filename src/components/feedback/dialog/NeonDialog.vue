<template>
  <neon-modal :opaque="opaque" :open="open" class="neon-dialog" @keydown.esc="cancel()">
    <neon-card size="m">
      <neon-card-body>
        <div>
          <h6 class="neon-dialog__title">{{ title }}</h6>
          <div class="neon-dialog__question" v-html="question"></div>
        </div>
        <div ref="actions">
          <neon-button
            :aria-label="cancelLabel"
            :full-width="true"
            :label="cancelLabel"
            color="low-contrast"
            size="s"
            @click="cancel()"
          />
          <neon-button
            :alternate-color="alternateColor"
            :aria-label="confirmLabel"
            :color="color"
            :full-width="true"
            :label="confirmLabel"
            class="neon-dialog__confirm-button"
            size="s"
            @click="confirm()"
          />
        </div>
      </neon-card-body>
    </neon-card>
  </neon-modal>
</template>

<script lang="ts" src="./NeonDialog.ts" />
