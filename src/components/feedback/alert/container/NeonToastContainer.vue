<template>
  <div class="neon-alert" :class="`neon-alert--${placement}`">
    <transition-group name="neon-alert-transition">
      <div
        v-for="(message, index) in value"
        :key="message.id"
        class="neon-toast__message"
        :class="[`neon-toast__message--${message.level}`, { 'neon-toast__message--dismissable': message.dismissable }]"
        :role="message.duration > 0 ? 'alert' : 'alertdialog'"
        :aria-labelledby="`toastTitle${index}`"
        @click="message.dismissable && closeMessage(message.id)"
      >
        <div v-if="message.title" class="neon-toast__title" :id="`toastTitle${index}`">{{ message.title }}</div>
        <neon-icon
          v-if="message.dismissable"
          name="times"
          class="neon-toast__close"
          tabindex="0"
          :role="message.dismissable ? 'button' : undefined"
          @click="message.dismissable && closeMessage(message.id)"
          @keydown.space.native="message.dismissable && closeMessage(message.id)"
          @keydown.enter.native="message.dismissable && closeMessage(message.id)"
          @keypress.space.prevent=""
        />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonToastContainer.ts"></script>
