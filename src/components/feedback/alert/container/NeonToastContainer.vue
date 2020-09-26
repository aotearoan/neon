<template>
  <div class="neon-alert" :class="`neon-alert--${placement}`">
    <transition-group name="neon-alert-transition">
      <div
        v-for="message in value"
        :key="message.id"
        class="neon-toast__message"
        :class="[`neon-toast__message--${message.level}`, { 'neon-toast__message--dismissable': message.dismissable }]"
        @click="message.dismissable && closeMessage(message.id)"
      >
        <div v-if="message.title" class="neon-toast__title">{{ message.title }}</div>
        <neon-icon v-if="message.dismissable" name="times" class="neon-toast__close" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonToastContainer.ts"></script>
