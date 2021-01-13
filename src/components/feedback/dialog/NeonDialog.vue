<template>
  <neon-modal class="neon-dialog" :open="open">
    <neon-card size="m">
      <neon-card-body>
        <div>
          <h6 class="neon-dialog__title">{{ title }}</h6>
          <div v-html="question" class="neon-dialog__question"></div>
        </div>
        <div>
          <neon-button :full-width="true" :aria-label="cancelLabel" :label="cancelLabel" size="s" @click="cancel()" />
          <neon-button
            :full-width="true"
            :aria-label="confirmLabel"
            :label="confirmLabel"
            size="s"
            :color="color"
            :alternate-color="alternateColor"
            @click="confirm()"
          />
        </div>
      </neon-card-body>
    </neon-card>
  </neon-modal>
</template>

<script lang="ts" src="./NeonDialog.ts" />
