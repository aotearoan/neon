<template>
  <div :class="`neon-alert--${placement}`" class="neon-alert">
    <transition-group name="neon-alert-transition">
      <div
        v-for="(message, index) in modelValue"
        :key="message.id"
        :aria-describedby="message.message ? `alertMessage${index}` : undefined"
        :aria-labelledby="message.title ? `alertTitle${index}` : undefined"
        :class="[
          `neon-alert__message--${message.level}`,
          {
            'neon-alert__message--dismissible': message.dismissible,
            'neon-alert__message--with-actions': message.primaryAction,
          },
        ]"
        :role="message.primaryAction ? 'dialog' : message.duration && message.duration > 0 ? 'alert' : 'alertdialog'"
        class="neon-alert__message"
        @click="!message.primaryAction && message.dismissible && closeMessage(message.id)"
      >
        <neon-icon :color="message.level" :name="icon(message.level)" />
        <div
          :role="!message.primaryAction ? 'button' : undefined"
          :tabindex="message.primaryAction ? -1 : 0"
          class="neon-alert__content"
          @keydown.space.prevent="!message.primaryAction && message.dismissible && closeMessage(message.id)"
          @keydown.enter="!message.primaryAction && message.dismissible && closeMessage(message.id)"
        >
          <div v-if="message.title" :id="`alertTitle${index}`" class="neon-alert__title">{{ message.title }}</div>
          <div v-if="message.message" :id="`alertMessage${index}`" class="neon-alert__body">{{ message.message }}</div>
        </div>
        <div v-if="message.primaryAction" class="neon-alert__actions">
          <neon-link
            v-if="message.primaryAction"
            class="neon-alert__action"
            outline-style="none"
            role="button"
            tabindex="0"
            @click="
              message.primaryAction.callback();
              closeMessage(message.id);
            "
            @keydown.space.prevent="
              message.primaryAction.callback();
              closeMessage(message.id);
            "
          >
            <span class="neon-alert__action-label">{{ message.primaryAction.label }}</span>
          </neon-link>
          <neon-link
            v-if="message.secondaryAction"
            class="neon-alert__action"
            outline-style="none"
            role="button"
            tabindex="0"
            @click="
              message.secondaryAction.callback();
              closeMessage(message.id);
            "
            @keydown.space.prevent="
              message.secondaryAction.callback();
              closeMessage(message.id);
            "
          >
            <span class="neon-alert__action-label">{{ message.secondaryAction.label }}</span>
          </neon-link>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonAlertContainer.ts"></script>
