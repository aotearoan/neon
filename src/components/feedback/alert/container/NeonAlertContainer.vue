<template>
  <div class="neon-alert" :class="`neon-alert--${placement}`">
    <transition-group name="neon-alert-transition">
      <div
        v-for="message in value"
        :key="message.id"
        class="neon-alert__message"
        :class="[`neon-alert__message--${message.level}`, { 'neon-alert__message--dismissable': message.dismissable }]"
        @click="message.dismissable && closeMessage(message.id)"
      >
        <neon-icon :name="icon(message.level)" :color="message.level" />
        <div>
          <div v-if="message.title" class="neon-alert__title">{{ message.title }}</div>
          <div v-if="message.message" class="neon-alert__body">{{ message.message }}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonAlertContainer.ts"></script>
