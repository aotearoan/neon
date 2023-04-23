<template>
  <div :class="`neon-alert--${placement}`" class="neon-alert">
    <transition-group name="neon-alert-transition">
      <div
        v-for="(message, index) in modelValue"
        :key="message.id"
        :aria-labelledby="`toastTitle${index}`"
        :class="[`neon-toast__message--${message.level}`, { 'neon-toast__message--dismissible': message.dismissible }]"
        :role="message.duration > 0 ? 'alert' : 'alertdialog'"
        class="neon-toast__message"
        @click="message.dismissible && closeMessage(message.id)"
      >
        <div v-if="message.title" :id="`toastTitle${index}`" class="neon-toast__title">{{ message.title }}</div>
        <neon-icon
          v-if="message.dismissible"
          :role="message.dismissible ? 'button' : undefined"
          class="neon-toast__close"
          name="times"
          tabindex="0"
          @click="message.dismissible && closeMessage(message.id)"
          @keydown.space="message.dismissible && closeMessage(message.id)"
          @keydown.enter="message.dismissible && closeMessage(message.id)"
          @keypress.space.prevent=""
        />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonToastContainer.ts"></script>
